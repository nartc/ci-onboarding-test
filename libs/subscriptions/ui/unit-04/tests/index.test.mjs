// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-ui-04/index.js';

test('subscriptions-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134551);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-ui-04', value: 134558, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-04","pricing-feature-01"] });
});

test('subscriptions-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134552);
  assert.equal(evaluate(-7).value, 134544);
});

test('subscriptions-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-04","pricing-feature-01"]);
});
