// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-data-01/index.js';

test('analytics-data-01: dependency-derived value', () => {
  assert.equal(weight, 3656);
  assert.deepEqual(evaluate(7), { project: 'analytics-data-01', value: 3663, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-01","search-util-02"] });
});

test('analytics-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3657);
  assert.equal(evaluate(-7).value, 3649);
});

test('analytics-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-01","search-util-02"]);
});
