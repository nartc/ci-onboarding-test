// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-feature-01/index.js';

test('analytics-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22451);
  assert.deepEqual(evaluate(7), { project: 'analytics-feature-01', value: 22458, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-01","search-data-02"] });
});

test('analytics-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22452);
  assert.equal(evaluate(-7).value, 22444);
});

test('analytics-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04","search-data-01","search-data-02"]);
});
