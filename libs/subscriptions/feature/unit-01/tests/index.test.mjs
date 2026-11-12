// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-feature-01/index.js';

test('subscriptions-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22382);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-feature-01', value: 22389, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-01","pricing-data-02"] });
});

test('subscriptions-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22383);
  assert.equal(evaluate(-7).value, 22375);
});

test('subscriptions-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-01","pricing-data-02"]);
});
