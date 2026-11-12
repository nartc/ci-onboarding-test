// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/inventory-e2e/index.js';

test('inventory-e2e: dependency-derived value', () => {
  assert.equal(weight, 1897116);
  assert.deepEqual(evaluate(7), { project: 'inventory-e2e', value: 1897123, dependencies: ["inventory-api","inventory-portal","checkout-portal"] });
});

test('inventory-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1897117);
  assert.equal(evaluate(-7).value, 1897109);
});

test('inventory-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["inventory-api","inventory-portal","checkout-portal"]);
});
