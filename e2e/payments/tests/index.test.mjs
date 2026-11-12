// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/payments-e2e/index.js';

test('payments-e2e: dependency-derived value', () => {
  assert.equal(weight, 1902844);
  assert.deepEqual(evaluate(7), { project: 'payments-e2e', value: 1902851, dependencies: ["payments-api","payments-portal","shipping-portal"] });
});

test('payments-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1902845);
  assert.equal(evaluate(-7).value, 1902837);
});

test('payments-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["payments-api","payments-portal","shipping-portal"]);
});
