// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/fulfillment-portal/index.js';

test('fulfillment-portal: dependency-derived value', () => {
  assert.equal(weight, 899095);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-portal', value: 899102, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","fulfillment-ui-01","fulfillment-ui-02","fulfillment-ui-03","fulfillment-ui-04","subscriptions-ui-01","subscriptions-ui-02"] });
});

test('fulfillment-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899096);
  assert.equal(evaluate(-7).value, 899088);
});

test('fulfillment-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","fulfillment-ui-01","fulfillment-ui-02","fulfillment-ui-03","fulfillment-ui-04","subscriptions-ui-01","subscriptions-ui-02"]);
});
