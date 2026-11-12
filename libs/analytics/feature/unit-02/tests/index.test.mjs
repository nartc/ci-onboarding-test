// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-feature-02/index.js';

test('analytics-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22448);
  assert.deepEqual(evaluate(7), { project: 'analytics-feature-02', value: 22455, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-02","search-data-03"] });
});

test('analytics-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22449);
  assert.equal(evaluate(-7).value, 22441);
});

test('analytics-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-02","search-data-03"]);
});
