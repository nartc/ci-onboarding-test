// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/experimentation-api/index.js';

test('experimentation-api: dependency-derived value', () => {
  assert.equal(weight, 104883);
  assert.deepEqual(evaluate(7), { project: 'experimentation-api', value: 104890, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04"] });
});

test('experimentation-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104884);
  assert.equal(evaluate(-7).value, 104876);
});

test('experimentation-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","experimentation-feature-01","experimentation-feature-02","experimentation-feature-03","experimentation-feature-04","experimentation-data-01","experimentation-data-02","experimentation-data-03","experimentation-data-04"]);
});
