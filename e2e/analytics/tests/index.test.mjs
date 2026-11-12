// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/analytics-e2e/index.js';

test('analytics-e2e: dependency-derived value', () => {
  assert.equal(weight, 1897947);
  assert.deepEqual(evaluate(7), { project: 'analytics-e2e', value: 1897954, dependencies: ["analytics-api","analytics-portal","search-portal"] });
});

test('analytics-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1897948);
  assert.equal(evaluate(-7).value, 1897940);
});

test('analytics-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["analytics-api","analytics-portal","search-portal"]);
});
