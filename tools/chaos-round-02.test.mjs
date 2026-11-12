import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { assertPhase, projects, runCacheLab } from './chaos/cache-lab.mjs';
import { assertDependencyResults } from './chaos/failure-lab.mjs';
import { loadLab, validateLab } from './chaos/validate.mjs';

const source = await loadLab();
const copy = () => structuredClone(source);

test('round 02 replaces large shard reruns with bounded fan-out, maximum five machines', () => {
  const budget = validateLab(source.pipeline, source.templates);
  assert.equal(budget.maximumConcurrentMachines, 5);
  assert.equal(budget.machinesPerJob.main, 4);
  assert.ok(Object.entries(budget.machinesPerJob).filter(([name]) => name !== 'main').every(([, n]) => n === 1));
  assert.equal(source.pipeline.env.CHAOS_TRIAL, 'round-02');
});

test('round 02 rejects guard removal, detached dependencies, and extra workers', () => {
  for (const name of Object.keys(source.pipeline.jobs).filter(name => name !== 'main')) {
    let { pipeline, templates } = copy();
    delete pipeline.jobs[name].if;
    assert.throws(() => validateLab(pipeline, templates), /PR-only/);
    ({ pipeline, templates } = copy());
    delete pipeline.jobs[name].needs;
    assert.throws(() => validateLab(pipeline, templates), /dependency graph/);
    ({ pipeline, templates } = copy());
    pipeline.jobs[name].workers = '3 linux-medium-js';
    assert.throws(() => validateLab(pipeline, templates), /must not launch extra workers/);
  }
});

test('round 02 refuses unknown jobs, longer timeouts, or masking the intentional failure', () => {
  let { pipeline, templates } = copy();
  pipeline.jobs.surprise = structuredClone(pipeline.jobs.sibling);
  assert.throws(() => validateLab(pipeline, templates), /Unexpected round-02 job/);
  ({ pipeline, templates } = copy());
  pipeline.jobs.boom['timeout-minutes'] = 8;
  assert.throws(() => validateLab(pipeline, templates), /probe timeout/);
  ({ pipeline, templates } = copy());
  pipeline.jobs.boom.steps.find(step => step.id === 'expected_failure')['continue-on-error'] = true;
  assert.throws(() => validateLab(pipeline, templates), /must not be tolerated/);
});

function fakePhase(status = 'cache-miss') {
  const artifacts = Object.fromEntries(projects.map(name => [name, { project: name, execution: name, value: name }]));
  return {
    tasks: projects.map(name => ({ projectName: name, taskId: `${name}:build`, hash: `hash-${name}`, status: 0, cacheStatus: status })),
    artifacts,
    artifactDigests: Object.fromEntries(projects.map(name => [name, createHash('sha256').update(JSON.stringify(artifacts[name])).digest('hex')])),
    journal: projects.map(name => artifacts[name]),
  };
}

test('remote cache oracle refuses local hits, rebuilds, changed bytes, and incomplete task evidence', () => {
  const cold = fakePhase();
  assertPhase(cold, undefined, projects);
  const remote = fakePhase('remote-cache-hit');
  assertPhase(remote, cold, [], 'remote-cache-hit');
  for (const mutation of [
    p => { p.tasks[0].cacheStatus = 'local-cache-hit'; },
    p => { p.journal.push(p.artifacts.seed); },
    p => { p.artifacts.seed.execution = 'reexecuted'; },
    p => { p.artifactDigests.seed = '0'.repeat(64); },
    p => { p.tasks.pop(); },
    p => { p.tasks[0].hash = 'changed'; },
    p => { p.tasks[0].status = 1; },
  ]) {
    const corrupted = structuredClone(remote);
    mutation(corrupted);
    assert.throws(() => assertPhase(corrupted, cold, [], 'remote-cache-hit'));
  }
});

test('real Nx fixture restores deleted outputs and invalidates only the changed dependency closure', { timeout: 120_000 }, async t => {
  const evidence = await mkdtemp(path.join(os.tmpdir(), 'nx-cache-evidence-'));
  t.after(() => rm(evidence, { recursive: true, force: true }));
  const report = await runCacheLab({ evidenceDirectory: evidence });
  assert.equal(report.passed, true);
  assert.equal(report.mode, 'local-only');
  assert.deepEqual(report.phases.map(p => p.name), ['cold', 'local-restore', 'input-mutation', 'local-mutated-restore']);
  assert.deepEqual(report.phases.map(p => p.journal.length), [3, 3, 5, 5]);
  assert.equal(report.phases[2].tasks.find(t => t.projectName === 'unrelated').cacheStatus, 'local-cache-hit');
  assert.equal(JSON.parse(await readFile(path.join(evidence, 'report.json'), 'utf8')).passed, true);
});

const expectedResults = { cache: 'success', boom: 'failure', sibling: 'success', handler: 'success', defaultDependent: 'skipped', explicitSuccess: 'skipped' };
test('join oracle checks failure and successful handlers without inventing skipped-result semantics', () => {
  assertDependencyResults(expectedResults);
  assertDependencyResults({ ...expectedResults, defaultDependent: 'success', explicitSuccess: 'success' });
  for (const key of Object.keys(expectedResults)) {
    assert.throws(() => assertDependencyResults({ ...expectedResults, [key]: undefined }));
    assert.throws(() => assertDependencyResults({ ...expectedResults, [key]: key === 'boom' ? 'success' : 'failure' }));
  }
});

async function failureFixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'nx-failure-evidence-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const env = { ...process.env, CHAOS_FAILURE_DIR: root, FAILURE_OUTCOME: 'failure', FAILURE_CONCLUSION: 'failure', JOB_STATUS: 'failure',
    CACHE_RESULT: 'success', BOOM_RESULT: 'failure', SIBLING_RESULT: 'success', HANDLER_RESULT: 'success', DEFAULT_RESULT: 'skipped', EXPLICIT_RESULT: 'skipped' };
  delete env.NODE_TEST_CONTEXT;
  delete env.NX_CLOUD_STEP_SUMMARY;
  const run = (action, status = 0, overrides = {}) => {
    const result = spawnSync(process.execPath, [fileURLToPath(new URL('./chaos/failure-lab.mjs', import.meta.url)), action],
      { env: { ...env, ...overrides }, encoding: 'utf8', timeout: 12_000 });
    assert.ifError(result.error);
    assert.equal(result.status, status, result.stdout + result.stderr);
    return result;
  };
  return { root, run, report: async () => JSON.parse(await readFile(path.join(root, 'report.json'), 'utf8')) };
}

test('failure probe exits 23, validates the untolerated outcome, and runs cleanup without turning the job green', async t => {
  const { run, report } = await failureFixture(t);
  run('start'); run('fail', 23); run('failure-step'); run('cleanup-step');
  assert.equal((await report()).passed, true);
  assert.equal((await report()).expectedJobResult, 'failure');
  run('cleanup-step', 1, { FAILURE_CONCLUSION: 'success' });
  assert.equal((await report()).passed, false);
});

test('failure oracle rejects stale handler evidence and unexpected success-path execution', async t => {
  const { root, run, report } = await failureFixture(t);
  run('start'); run('fail', 23); run('failure-step');
  const handler = JSON.parse(await readFile(path.join(root, 'failure-handler.json'), 'utf8'));
  await writeFile(path.join(root, 'failure-handler.json'), JSON.stringify({ ...handler, trial: 'stale' }));
  run('cleanup-step', 1);
  assert.equal((await report()).passed, false);
  run('failure-step'); run('forbidden', 86); run('cleanup-step', 1);
  assert.equal((await report()).passed, false);
  run('start'); run('fail', 23); run('failure-step'); run('cleanup-step');
  assert.equal((await report()).passed, true, 'Old unexpected-execution evidence must not taint a fresh trial');
});

test('dependency handler and always-run join fail closed on wrong upstream results', async t => {
  const { run, report } = await failureFixture(t);
  run('dependency-handler');
  run('dependency-handler', 1, { BOOM_RESULT: 'success' });
  assert.equal((await report()).passed, false);
  run('join');
  assert.equal((await report()).passed, true);
  assert.ok((await report()).requiresExternalStepAudit.includes('explicit_success'));
  run('join', 1, { DEFAULT_RESULT: 'failure' });
  assert.equal((await report()).passed, false);
});
