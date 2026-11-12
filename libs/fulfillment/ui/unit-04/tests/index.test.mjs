// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-ui-04/index.js';

test('fulfillment-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134961);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-ui-04', value: 134968, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-04","subscriptions-feature-01"] });
});

test('fulfillment-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134962);
  assert.equal(evaluate(-7).value, 134954);
});

test('fulfillment-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-04","subscriptions-feature-01"]);
});
