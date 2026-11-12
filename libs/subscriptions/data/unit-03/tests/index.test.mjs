// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-data-03/index.js';

test('subscriptions-data-03: dependency-derived value', () => {
  assert.equal(weight, 3657);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-data-03', value: 3664, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","subscriptions-util-01","subscriptions-util-02","subscriptions-util-03","subscriptions-util-04","pricing-util-03","pricing-util-04"] });
});

test('subscriptions-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3658);
  assert.equal(evaluate(-7).value, 3650);
});

test('subscriptions-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","subscriptions-util-01","subscriptions-util-02","subscriptions-util-03","subscriptions-util-04","pricing-util-03","pricing-util-04"]);
});
