// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-data-02/index.js';

test('subscriptions-data-02: dependency-derived value', () => {
  assert.equal(weight, 3643);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-data-02', value: 3650, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","subscriptions-util-01","subscriptions-util-02","subscriptions-util-03","subscriptions-util-04","pricing-util-02","pricing-util-03"] });
});

test('subscriptions-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3644);
  assert.equal(evaluate(-7).value, 3636);
});

test('subscriptions-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","subscriptions-util-01","subscriptions-util-02","subscriptions-util-03","subscriptions-util-04","pricing-util-02","pricing-util-03"]);
});
