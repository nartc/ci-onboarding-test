// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-data-04/index.js';

test('fulfillment-data-04: dependency-derived value', () => {
  assert.equal(weight, 3650);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-data-04', value: 3657, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","fulfillment-util-01","fulfillment-util-02","fulfillment-util-03","fulfillment-util-04","subscriptions-util-04","subscriptions-util-01"] });
});

test('fulfillment-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3651);
  assert.equal(evaluate(-7).value, 3643);
});

test('fulfillment-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","fulfillment-util-01","fulfillment-util-02","fulfillment-util-03","fulfillment-util-04","subscriptions-util-04","subscriptions-util-01"]);
});
