// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-ui-03/index.js';

test('fulfillment-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134962);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-ui-03', value: 134969, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-03","subscriptions-feature-04"] });
});

test('fulfillment-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134963);
  assert.equal(evaluate(-7).value, 134955);
});

test('fulfillment-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","subscriptions-feature-03","subscriptions-feature-04"]);
});
