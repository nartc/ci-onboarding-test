// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/subscriptions-portal/index.js';

test('subscriptions-portal: dependency-derived value', () => {
  assert.equal(weight, 896228);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-portal', value: 896235, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","subscriptions-ui-01","subscriptions-ui-02","subscriptions-ui-03","subscriptions-ui-04","pricing-ui-01","pricing-ui-02"] });
});

test('subscriptions-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 896229);
  assert.equal(evaluate(-7).value, 896221);
});

test('subscriptions-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","subscriptions-ui-01","subscriptions-ui-02","subscriptions-ui-03","subscriptions-ui-04","pricing-ui-01","pricing-ui-02"]);
});
