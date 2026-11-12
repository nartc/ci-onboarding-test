// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-data-04/index.js';

test('subscriptions-data-04: dependency-derived value', () => {
  assert.equal(weight, 3660);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-data-04', value: 3667, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","subscriptions-util-01","subscriptions-util-02","subscriptions-util-03","subscriptions-util-04","pricing-util-04","pricing-util-01"] });
});

test('subscriptions-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3661);
  assert.equal(evaluate(-7).value, 3653);
});

test('subscriptions-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","subscriptions-util-01","subscriptions-util-02","subscriptions-util-03","subscriptions-util-04","pricing-util-04","pricing-util-01"]);
});
