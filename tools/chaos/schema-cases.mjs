import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { schemaValidate } from './validate.mjs';

const base = { on: { experiment: { event: 'PUSH', branches: ['ci-chaos/schema-lab'] } },
  jobs: { probe: { 'runs-on': 'linux-medium-js', workers: false, 'timeout-minutes': 2, steps: [{ run: 'true' }] } } };
const definitions = [
  ['baseline', true, () => {}, 'Positive control'],
  ['fixed-plus-sized-workers', false, (c) => { c.jobs.probe.workers = { workers: '1 linux-medium-js', small: '0', medium: '1 linux-medium-js', large: '1 linux-medium-js' }; }, 'Incompatible worker modes'],
  ['conflicting-machine-setup', false, (c) => { c.jobs.probe.image = 'ubuntu22.04-node24.14-v1'; }, 'Mutually exclusive machine setup'],
  ['uses-plus-run', false, (c) => { c.jobs.probe.steps[0].uses = 'local-step.yaml'; }, 'Mutually exclusive step actions'],
  ['negative-worker-count', false, (c) => { c.jobs.probe.workers = -1; }, 'Negative worker count'],
  ['zero-step-timeout', true, (c) => { c.jobs.probe.steps[0]['timeout-minutes'] = 0; }, 'No step-timeout lower bound in schema'],
  ['negative-step-timeout', true, (c) => { c.jobs.probe.steps[0]['timeout-minutes'] = -1; }, 'No step-timeout lower bound in schema'],
  ['empty-step', true, (c) => { c.jobs.probe.steps = [{}]; }, 'No action key required in schema'],
  ['run-and-script-aliases', true, (c) => { c.jobs.probe.steps[0].script = 'exit 1'; }, 'Alias conflict not checked'],
  ['missing-needed-job', true, (c) => { c.jobs.probe.needs = 'does-not-exist'; }, 'Referential integrity is a runtime concern'],
  ['self-dependent-job', true, (c) => { c.jobs.probe.needs = 'probe'; }, 'DAG cycles not checked by schema'],
  ['incomplete-sized-workers', true, (c) => { c.jobs.probe.workers = { small: '0' }; }, 'Docs require all three sizes'],
  ['decreasing-workload-bounds', true, (c) => { c.jobs.probe.workers = { small: { count: '0', workload: '80%' }, medium: { count: '1 linux-medium-js', workload: '20%' }, large: '1 linux-medium-js' }; }, 'Cross-field ordering not checked'],
  ['merge-group-trigger', true, (c) => { c.on.experiment = { event: 'MERGE_GROUP', branches: ['main'] }; }, 'Schema allows it; reference limits section says unsupported'],
  ['contradictory-branch-filters', true, (c) => { c.on.experiment['branches-ignore'] = ['ci-chaos/**']; }, 'Docs prohibit combining the filters'],
];

export function schemaCases() {
  return definitions.map(([name, accepted, mutate, note]) => {
    const config = structuredClone(base);
    mutate(config);
    return { name, accepted, note, config };
  });
}

export function runSchemaCases() {
  return schemaCases().map(({ name, accepted, note, config }) => {
    const actual = schemaValidate(config);
    assert.equal(actual, accepted, `Pinned schema behavior changed for ${name}`);
    return { name, accepted: actual, note };
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.table(runSchemaCases());
  console.log('These are local schema observations, not confirmed runtime defects. No cloud runs were launched.');
}
