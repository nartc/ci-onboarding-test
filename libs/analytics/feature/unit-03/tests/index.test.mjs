// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-feature-03/index.js';

test('analytics-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22456);
  assert.deepEqual(evaluate(7), { project: 'analytics-feature-03', value: 22463, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-03","search-data-04"] });
});

test('analytics-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22457);
  assert.equal(evaluate(-7).value, 22449);
});

test('analytics-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-03","search-data-04"]);
});
