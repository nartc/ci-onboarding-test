// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/shipping-e2e/index.js';

test('shipping-e2e: dependency-derived value', () => {
  assert.equal(weight, 1900989);
  assert.deepEqual(evaluate(7), { project: 'shipping-e2e', value: 1900996, dependencies: ["shipping-api","shipping-portal","inventory-portal"] });
});

test('shipping-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1900990);
  assert.equal(evaluate(-7).value, 1900982);
});

test('shipping-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["shipping-api","shipping-portal","inventory-portal"]);
});
