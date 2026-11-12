// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-ui-03/index.js';

test('subscriptions-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134529);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-ui-03', value: 134536, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-03","pricing-feature-04"] });
});

test('subscriptions-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134530);
  assert.equal(evaluate(-7).value, 134522);
});

test('subscriptions-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-03","pricing-feature-04"]);
});
