// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-data-02/index.js';

test('fulfillment-data-02: dependency-derived value', () => {
  assert.equal(weight, 3656);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-data-02', value: 3663, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","fulfillment-util-01","fulfillment-util-02","fulfillment-util-03","fulfillment-util-04","subscriptions-util-02","subscriptions-util-03"] });
});

test('fulfillment-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3657);
  assert.equal(evaluate(-7).value, 3649);
});

test('fulfillment-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","fulfillment-util-01","fulfillment-util-02","fulfillment-util-03","fulfillment-util-04","subscriptions-util-02","subscriptions-util-03"]);
});
