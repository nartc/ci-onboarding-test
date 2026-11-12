// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-feature-02/index.js';

test('fulfillment-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22422);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-feature-02', value: 22429, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04","subscriptions-data-02","subscriptions-data-03"] });
});

test('fulfillment-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22423);
  assert.equal(evaluate(-7).value, 22415);
});

test('fulfillment-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04","subscriptions-data-02","subscriptions-data-03"]);
});
