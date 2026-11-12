import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv2020 from 'ajv/dist/2020.js';
import { parseDocument } from 'yaml';

export const SCHEMA_SHA256 = 'e087f630e601f1d4e644e14306cc27659a925dcf21daa3c4fa925b3eeec1a085';
const workspace = fileURLToPath(new URL('../../', import.meta.url));
const schemaBytes = await readFile(new URL('./schema/nx-cloud-ci.schema.json', import.meta.url));
assert.equal(createHash('sha256').update(schemaBytes).digest('hex'), SCHEMA_SHA256, 'Schema snapshot changed; review the new schema and update its pin explicitly');
export const schemaValidate = new Ajv2020({ strict: false, allErrors: true }).compile(JSON.parse(schemaBytes));
const knownTemplates = new Set(['linux-medium-js', 'linux-large-js']);

export function parseYaml(source) {
  const document = parseDocument(source, { uniqueKeys: true });
  assert.equal(document.errors.length, 0, document.errors.map((error) => error.message).join('\n'));
  return document.toJS({ maxAliasCount: 100 });
}

function countWorkers(value, mainTemplate) {
  if (Number.isInteger(value)) {
    assert.ok(value >= 0 && value <= 6, 'Additional workers must be between zero and six per job');
    return { [mainTemplate]: value };
  }
  assert.equal(typeof value, 'string');
  if (value.trim() === '0') return {};
  const result = {};
  for (const pair of value.split(';')) {
    const match = pair.trim().match(/^(\d+) ([a-z0-9-]+)$/);
    assert.ok(match, `Invalid worker count: ${pair}`);
    const [, count, template] = match;
    assert.ok(knownTemplates.has(template), `Unapproved machine template: ${template}`);
    assert.ok(!(template in result), `Duplicate worker template: ${template}`);
    result[template] = Number(count);
  }
  assert.ok(Object.values(result).reduce((a, b) => a + b, 0) <= 6, 'At most six additional workers per job');
  return result;
}

function workerPeak(setting, templates, mainTemplate) {
  if (setting === false) return 0;
  const value = typeof setting === 'string' && setting in templates ? templates[setting] : setting;
  if (typeof value !== 'object' || value === null) {
    const count = Object.values(countWorkers(value ?? 0, mainTemplate)).reduce((a, b) => a + b, 0);
    assert.ok(count >= 3, 'Lab distribution requires at least three additional workers');
    return count;
  }
  let pools;
  if ('workers' in value) {
    assert.ok(!['small', 'medium', 'large'].some((size) => size in value), 'Cannot mix fixed and sized workers');
    pools = [countWorkers(value.workers, mainTemplate)];
  } else {
    assert.ok(['small', 'medium', 'large'].every((size) => size in value), 'All three worker sizes are required');
    pools = ['small', 'medium', 'large'].map((size) => countWorkers(value[size]?.count ?? value[size], mainTemplate));
    const small = Number.parseInt(value.small?.workload ?? '33%', 10);
    const medium = Number.parseInt(value.medium?.workload ?? '66%', 10);
    assert.ok(small > 0 && small < medium && medium < 100, 'Workload thresholds must increase');
    for (let i = 1; i < pools.length; i++) {
      for (const [template, count] of Object.entries(pools[i - 1])) {
        assert.ok((pools[i][template] ?? 0) >= count, 'Worker counts cannot decrease across sizes');
      }
    }
  }
  for (const pool of pools) {
    // The first live trial exposed a runtime minimum absent from the JSON Schema.
    // Conservatively require three additional workers, regardless of main-worker participation.
    assert.ok(Object.values(pool).reduce((a, b) => a + b, 0) >= 3, 'Lab distribution requires at least three additional workers in every size');
    for (const rule of value['assignment-rules'] ?? []) {
      assert.ok(Array.isArray(rule['run-on']) && rule['run-on'].length, 'Assignment rules need a destination');
      for (const destination of rule['run-on']) {
        assert.ok((pool[destination.agent] ?? 0) >= 1, 'Every routing destination must exist in every pool size');
      }
    }
  }
  assert.deepEqual(value['stop-after'], ['verify', 'e2e'], 'Worker shutdown must cover the distributed command');
  return Math.max(...pools.map((pool) => Object.values(pool).reduce((a, b) => a + b, 0)));
}

export function validateLab(pipeline, templates) {
  assert.ok(schemaValidate(pipeline), JSON.stringify(schemaValidate.errors));
  const resolved = { ...pipeline, 'worker-templates': templates };
  assert.ok(schemaValidate(resolved), JSON.stringify(schemaValidate.errors));
  assert.equal(pipeline['worker-templates'], '.nx/pipelines/chaos-workers.yaml');
  assert.deepEqual(pipeline.on, {
    'pull-requests': { event: 'PR', branches: ['main'] }, pushes: { event: 'PUSH', branches: ['main'] },
  }, 'Only approved PR/main triggers are allowed');
  for (const name of ['mixed', 'scaled', 'semantics']) {
    const expected = name === 'semantics' ? "always() && nxcloud.event_name == 'pull_request'" : "nxcloud.event_name == 'pull_request'";
    assert.equal(pipeline.jobs?.[name]?.if, expected, `${name} must be PR-only`);
  }
  assert.equal(pipeline.jobs?.mixed?.needs, 'main', 'Chaos must follow the regular Nx check');
  assert.ok(!pipeline.triggers && !pipeline.workflows, 'No alternate trigger/job aliases in the active lab');
  assert.deepEqual(pipeline['self-healing'], { 'fix-tasks-patterns': [], 'auto-apply-patterns': [] });
  const jobs = pipeline.jobs;
  const names = Object.keys(jobs);
  assert.ok(names.length > 0 && names.length <= 12, 'Bound the number of jobs');
  const ancestors = {};
  const visiting = new Set();
  function visit(name) {
    assert.ok(name in jobs, `Unknown job dependency: ${name}`);
    assert.ok(!visiting.has(name), `Job dependency cycle: ${name}`);
    if (ancestors[name]) return ancestors[name];
    visiting.add(name);
    const needed = jobs[name].needs === undefined ? [] : [jobs[name].needs].flat();
    const result = new Set();
    for (const dependency of needed) {
      result.add(dependency);
      for (const ancestor of visit(dependency)) result.add(ancestor);
    }
    visiting.delete(name);
    ancestors[name] = result;
    return result;
  }
  const machines = {};
  function checkSteps(steps, timeout, ids = new Set()) {
    for (const step of steps ?? []) {
      const id = step.id ?? step['step-id'];
      if (id) { assert.ok(!ids.has(id), `Duplicate step ID: ${id}`); ids.add(id); }
      assert.ok(!(step.run !== undefined && step.script !== undefined), 'Ambiguous run/script aliases');
      assert.ok(step.run !== undefined || step.script !== undefined || step.steps, 'Every lab step needs an action');
      if ('timeout-minutes' in step) assert.ok(step['timeout-minutes'] > 0 && step['timeout-minutes'] <= timeout, 'Step timeout must be positive and fit the job');
      if (step.steps) checkSteps(step.steps, timeout, ids);
    }
  }
  for (const [name, job] of Object.entries(jobs)) {
    visit(name);
    assert.ok(knownTemplates.has(job['runs-on']), 'Use approved Linux machine templates');
    assert.ok(job['timeout-minutes'] > 0 && job['timeout-minutes'] <= 10, 'Every job must time out within ten minutes');
    assert.ok(job.permissions?.['repository-contents'] !== 'write', 'Lab jobs must not receive writable repository tokens');
    machines[name] = 1 + workerPeak(job.workers, templates, job['runs-on']); // Include the orchestration machine even when its worker is off.
    checkSteps(job.steps, job['timeout-minutes']);
  }
  // Maximum weighted antichain: only jobs unrelated by needs can run together.
  let peak = 0;
  let peakJobs = [];
  for (let mask = 1; mask < 2 ** names.length; mask++) {
    const concurrent = names.filter((_, i) => mask & (1 << i));
    if (concurrent.some((a) => concurrent.some((b) => ancestors[a].has(b)))) continue;
    const count = concurrent.reduce((total, name) => total + machines[name], 0);
    if (count > peak) { peak = count; peakJobs = concurrent; }
  }
  // Every PR also starts the existing single-job GitHub Actions workflow.
  const reservedGithubRunners = 1;
  const total = peak + reservedGithubRunners;
  assert.ok(total <= 8, `Machine cap exceeded: ${total} concurrent machines (${peakJobs.join(', ')} + GitHub runner)`);
  return { maximumConcurrentMachines: total, maximumConcurrentNxCloudMachines: peak, reservedGithubRunners,
    concurrentJobs: peakJobs, machinesPerJob: machines };
}

export async function loadLab() {
  return {
    pipeline: parseYaml(await readFile(path.join(workspace, '.nx/pipelines/ci.yaml'), 'utf8')),
    templates: parseYaml(await readFile(path.join(workspace, '.nx/pipelines/chaos-workers.yaml'), 'utf8')),
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { pipeline, templates } = await loadLab();
  console.log(JSON.stringify({ schemaSha256: SCHEMA_SHA256, ...validateLab(pipeline, templates) }, null, 2));
}
