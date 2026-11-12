// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-feature-04/index.js';

test('analytics-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22463);
  assert.deepEqual(evaluate(7), { project: 'analytics-feature-04', value: 22470, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-04","search-data-01"] });
});

test('analytics-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22464);
  assert.equal(evaluate(-7).value, 22456);
});

test('analytics-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-04","search-data-01"]);
});
