// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-ui-02/index.js';

test('subscriptions-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134522);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-ui-02', value: 134529, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-02","pricing-feature-03"] });
});

test('subscriptions-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134523);
  assert.equal(evaluate(-7).value, 134515);
});

test('subscriptions-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","pricing-feature-02","pricing-feature-03"]);
});
