// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-feature-03/index.js';

test('subscriptions-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22370);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-feature-03', value: 22377, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-03","pricing-data-04"] });
});

test('subscriptions-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22371);
  assert.equal(evaluate(-7).value, 22363);
});

test('subscriptions-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-03","pricing-data-04"]);
});
