// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-ui-01/index.js';

test('fulfillment-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134957);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-ui-01', value: 134964, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-01","subscriptions-feature-02"] });
});

test('fulfillment-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134958);
  assert.equal(evaluate(-7).value, 134950);
});

test('fulfillment-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-01","subscriptions-feature-02"]);
});
