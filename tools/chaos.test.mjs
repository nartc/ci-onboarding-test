import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { loadLab, parseYaml, validateLab } from './chaos/validate.mjs';
import { runSchemaCases } from './chaos/schema-cases.mjs';
import { selectProjects } from './chaos/run-shard.mjs';

const source = await loadLab();
const copy = () => structuredClone(source);
const probe = fileURLToPath(new URL('./chaos/probes.mjs', import.meta.url));

test('lab machine accounting includes orchestration machines and peaks at eight', () => {
  assert.deepEqual(validateLab(source.pipeline, source.templates), {
    maximumConcurrentMachines: 8, concurrentJobs: ['mixed', 'scaled'], machinesPerJob: { mixed: 4, scaled: 4, semantics: 1 },
  });
});

test('lab rejects a ninth concurrent machine', () => {
  const { pipeline, templates } = copy();
  delete pipeline.jobs.semantics.needs;
  assert.throws(() => validateLab(pipeline, templates), /Machine cap exceeded/);
});

test('lab rejects wildcard triggers and writable repository tokens', () => {
  let { pipeline, templates } = copy();
  pipeline.on.experiment.branches = ['**'];
  assert.throws(() => validateLab(pipeline, templates), /explicit experiment branch/);
  ({ pipeline, templates } = copy());
  pipeline.jobs.mixed.permissions = { 'repository-contents': 'write' };
  assert.throws(() => validateLab(pipeline, templates), /writable repository tokens/);
});

test('lab rejects missing dependencies and dependency cycles', () => {
  let { pipeline, templates } = copy();
  pipeline.jobs.mixed.needs = 'missing';
  assert.throws(() => validateLab(pipeline, templates), /Unknown job dependency/);
  ({ pipeline, templates } = copy());
  pipeline.jobs.mixed.needs = 'semantics';
  assert.throws(() => validateLab(pipeline, templates), /dependency cycle/);
});

test('lab rejects incomplete scaling and descending workload thresholds', () => {
  let { pipeline, templates } = copy();
  delete templates.scaled.medium;
  assert.throws(() => validateLab(pipeline, templates), /All three worker sizes/);
  ({ pipeline, templates } = copy());
  templates.scaled.small.workload = '80%';
  assert.throws(() => validateLab(pipeline, templates), /thresholds must increase/);
});

test('lab rejects shrinking pools and unrunnable disabled-main-worker setups', () => {
  let { pipeline, templates } = copy();
  templates.scaled.large = '1 linux-medium-js';
  assert.throws(() => validateLab(pipeline, templates), /cannot decrease/);
  ({ pipeline, templates } = copy());
  templates.scaled.small.count = '0';
  assert.throws(() => validateLab(pipeline, templates), /another runnable worker/);
});

test('lab rejects oversized pools and missing assignment destinations', () => {
  let { pipeline, templates } = copy();
  templates.mixed.workers = '4 linux-large-js';
  assert.throws(() => validateLab(pipeline, templates), /three additional workers/);
  ({ pipeline, templates } = copy());
  templates.mixed.workers = '3 linux-medium-js';
  assert.throws(() => validateLab(pipeline, templates), /routing destination/);
});

test('lab rejects ambiguous actions, duplicate step IDs, and invalid timeouts', () => {
  let { pipeline, templates } = copy();
  pipeline.jobs.mixed.steps[0].script = 'false';
  assert.throws(() => validateLab(pipeline, templates), /Ambiguous/);
  ({ pipeline, templates } = copy());
  pipeline.jobs.mixed.steps = [{ id: 'x', run: 'true' }, { id: 'x', run: 'true' }];
  assert.throws(() => validateLab(pipeline, templates), /Duplicate step ID/);
  for (const timeout of [0, -1, 11]) {
    ({ pipeline, templates } = copy());
    pipeline.jobs.mixed.steps[0]['timeout-minutes'] = timeout;
    assert.throws(() => validateLab(pipeline, templates), /Step timeout/);
  }
});

test('YAML duplicate keys fail instead of silently changing a budget', () => {
  assert.throws(() => parseYaml('workers: 1\nworkers: 20\n'), /unique/);
});

test('all fifteen offline schema observations match the pinned schema', () => {
  const cases = runSchemaCases();
  assert.equal(cases.length, 15);
  assert.equal(cases.filter((result) => !result.accepted).length, 4);
});

test('shards partition every root project with no overlap', async () => {
  const inventory = JSON.parse(await readFile(new URL('./generated/projects.json', import.meta.url), 'utf8'));
  const { domains } = JSON.parse(await readFile(new URL('../workspace.config.json', import.meta.url), 'utf8'));
  const mixed = selectProjects(inventory, domains, 'mixed');
  const scaled = selectProjects(inventory, domains, 'scaled');
  assert.equal(mixed.length, 252);
  assert.equal(scaled.length, 228);
  assert.deepEqual([...mixed, ...scaled].map((p) => p.name).sort(), inventory.map((p) => p.name).sort());
  assert.equal(new Set([...mixed, ...scaled].map((p) => p.name)).size, inventory.length);
});

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'nx-chaos-probes-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const env = { ...process.env, CHAOS_EVIDENCE_DIR: root, NX_CLOUD_OUTPUT: path.join(root, 'output.txt'),
    MIXED_RESULT: 'success', SCALED_RESULT: 'success', CHAOS_SCOPE: 'step', EXPRESSION_SCOPE: 'job',
    FAILURE_OUTCOME: 'failure', FAILURE_CONCLUSION: 'success', TIMEOUT_OUTCOME: 'failure', TIMEOUT_CONCLUSION: 'success',
    OUTPUT_TOKEN: 'chaos-round-01', OUTPUT_NUMBER: '42' };
  delete env.NODE_TEST_CONTEXT;
  delete env.NX_CLOUD_STEP_SUMMARY;
  const run = (args, expectedStatus = 0, overrides = {}) => {
    const result = spawnSync(process.execPath, [probe, ...args], { env: { ...env, ...overrides }, encoding: 'utf8', timeout: 5_000 });
    assert.ifError(result.error);
    assert.equal(result.status, expectedStatus, `${args.join(' ')}:\n${result.stdout}\n${result.stderr}`);
    return result;
  };
  const start = (args, stopWhenReady = false) => new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [probe, ...args], { env, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    const timer = setTimeout(() => { child.kill('SIGKILL'); reject(new Error(`Probe hung: ${args}`)); }, 12_000);
    child.stdout.on('data', (data) => {
      output += data;
      if (stopWhenReady && output.includes('CHAOS_EVIDENCE timeout-start')) child.kill('SIGTERM');
    });
    child.stderr.on('data', (data) => { output += data; });
    child.on('error', (error) => { clearTimeout(timer); reject(error); });
    child.on('close', (code, signal) => {
      clearTimeout(timer);
      if (stopWhenReady ? signal === 'SIGTERM' : code === 0) resolve(output);
      else reject(new Error(`Probe failed (${code}/${signal}): ${output}`));
    });
  });
  run(['start']);
  return { root, run, start, env };
}

test('probe oracle passes real rendezvous, output handling, and terminated process evidence', async (t) => {
  const { root, run, start } = await fixture(t);
  run(['dependencies']);
  run(['outputs']);
  assert.match(await readFile(path.join(root, 'output.txt'), 'utf8'), /token=chaos-round-01/);
  run(['fail'], 17);
  run(['success']);
  await Promise.all([start(['parallel', 'left']), start(['parallel', 'right'])]);
  // This proves our oracle locally, not the service's timeout handling.
  await start(['timeout'], true);
  run(['verify']);
  assert.equal(JSON.parse(await readFile(path.join(root, 'verified.json'), 'utf8')).passed, true);
  assert.match(run(['report']).stdout, /"passed":true/);
  run(['verify'], 1, { FAILURE_CONCLUSION: 'failure' });
  assert.match(run(['report']).stdout, /"passed":false/);
});

test('parallel evidence is atomically published across repeated fresh trials', async (t) => {
  const { root, run, start } = await fixture(t);
  const trials = new Set();
  for (let attempt = 0; attempt < 8; attempt++) {
    run(['start']);
    await Promise.all([start(['parallel', 'left']), start(['parallel', 'right'])]);
    const left = JSON.parse(await readFile(path.join(root, 'parallel-left-done.json'), 'utf8'));
    const right = JSON.parse(await readFile(path.join(root, 'parallel-right-done.json'), 'utf8'));
    assert.equal(left.trial, right.trial);
    trials.add(left.trial);
  }
  assert.equal(trials.size, 8);
});

test('probe oracle rejects missing evidence and incorrect result semantics', async (t) => {
  const { run } = await fixture(t);
  run(['verify'], 1);
  run(['verify'], 1, { FAILURE_CONCLUSION: 'failure' });
  run(['dependencies'], 1, { MIXED_RESULT: 'failure' });
  run(['outputs'], 1, { CHAOS_SCOPE: 'workflow' });
  run(['forbidden'], 86);
});

test('probe report does not claim success for an empty or failed run', async (t) => {
  const { root, run } = await fixture(t);
  assert.match(run(['report']).stdout, /"passed":false/);
  await writeFile(path.join(root, 'observed.json'), JSON.stringify({ failureConclusion: 'failure' }));
  assert.match(run(['report']).stdout, /"passed":false/);
});
