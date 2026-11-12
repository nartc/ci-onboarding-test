// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/billing-e2e/index.js';

test('billing-e2e: dependency-derived value', () => {
  assert.equal(weight, 1903702);
  assert.deepEqual(evaluate(7), { project: 'billing-e2e', value: 1903709, dependencies: ["billing-api","billing-portal","identity-portal"] });
});

test('billing-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1903703);
  assert.equal(evaluate(-7).value, 1903695);
});

test('billing-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["billing-api","billing-portal","identity-portal"]);
});
