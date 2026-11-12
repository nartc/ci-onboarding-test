// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-ui-01/index.js';

test('subscriptions-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134540);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-ui-01', value: 134547, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-01","pricing-feature-02"] });
});

test('subscriptions-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134541);
  assert.equal(evaluate(-7).value, 134533);
});

test('subscriptions-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-01","pricing-feature-02"]);
});
