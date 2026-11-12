// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-feature-01/index.js';

test('fulfillment-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22403);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-feature-01', value: 22410, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04","subscriptions-data-01","subscriptions-data-02"] });
});

test('fulfillment-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22404);
  assert.equal(evaluate(-7).value, 22396);
});

test('fulfillment-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04","subscriptions-data-01","subscriptions-data-02"]);
});
