// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/recommendations-api/index.js';

test('recommendations-api: dependency-derived value', () => {
  assert.equal(weight, 103927);
  assert.deepEqual(evaluate(7), { project: 'recommendations-api', value: 103934, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04"] });
});

test('recommendations-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 103928);
  assert.equal(evaluate(-7).value, 103920);
});

test('recommendations-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04"]);
});
