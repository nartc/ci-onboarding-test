// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-feature-04/index.js';

test('subscriptions-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22377);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-feature-04', value: 22384, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-04","pricing-data-01"] });
});

test('subscriptions-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22378);
  assert.equal(evaluate(-7).value, 22370);
});

test('subscriptions-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-04","pricing-data-01"]);
});
