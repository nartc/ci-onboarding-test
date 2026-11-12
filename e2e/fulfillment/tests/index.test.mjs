// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/fulfillment-e2e/index.js';

test('fulfillment-e2e: dependency-derived value', () => {
  assert.equal(weight, 1900147);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-e2e', value: 1900154, dependencies: ["fulfillment-api","fulfillment-portal","subscriptions-portal"] });
});

test('fulfillment-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1900148);
  assert.equal(evaluate(-7).value, 1900140);
});

test('fulfillment-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["fulfillment-api","fulfillment-portal","subscriptions-portal"]);
});
