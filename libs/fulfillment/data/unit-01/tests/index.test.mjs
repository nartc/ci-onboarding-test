// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-data-01/index.js';

test('fulfillment-data-01: dependency-derived value', () => {
  assert.equal(weight, 3642);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-data-01', value: 3649, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-util-01","fulfillment-util-02","fulfillment-util-03","fulfillment-util-04","subscriptions-util-01","subscriptions-util-02"] });
});

test('fulfillment-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3643);
  assert.equal(evaluate(-7).value, 3635);
});

test('fulfillment-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-util-01","fulfillment-util-02","fulfillment-util-03","fulfillment-util-04","subscriptions-util-01","subscriptions-util-02"]);
});
