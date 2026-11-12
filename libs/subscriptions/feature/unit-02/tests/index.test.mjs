// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-feature-02/index.js';

test('subscriptions-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22362);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-feature-02', value: 22369, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-02","pricing-data-03"] });
});

test('subscriptions-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22363);
  assert.equal(evaluate(-7).value, 22355);
});

test('subscriptions-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04","pricing-data-02","pricing-data-03"]);
});
