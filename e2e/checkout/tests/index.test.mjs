// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/checkout-e2e/index.js';

test('checkout-e2e: dependency-derived value', () => {
  assert.equal(weight, 1898420);
  assert.deepEqual(evaluate(7), { project: 'checkout-e2e', value: 1898427, dependencies: ["checkout-api","checkout-portal","catalog-portal"] });
});

test('checkout-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1898421);
  assert.equal(evaluate(-7).value, 1898413);
});

test('checkout-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["checkout-api","checkout-portal","catalog-portal"]);
});
