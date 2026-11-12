// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-feature-04/index.js';

test('fulfillment-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22426);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-feature-04', value: 22433, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04","subscriptions-data-04","subscriptions-data-01"] });
});

test('fulfillment-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22427);
  assert.equal(evaluate(-7).value, 22419);
});

test('fulfillment-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04","subscriptions-data-04","subscriptions-data-01"]);
});
