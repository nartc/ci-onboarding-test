// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-ui-02/index.js';

test('fulfillment-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134949);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-ui-02', value: 134956, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-02","subscriptions-feature-03"] });
});

test('fulfillment-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134950);
  assert.equal(evaluate(-7).value, 134942);
});

test('fulfillment-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-02","subscriptions-feature-03"]);
});
