// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/subscriptions-api/index.js';

test('subscriptions-api: dependency-derived value', () => {
  assert.equal(weight, 104601);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-api', value: 104608, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04"] });
});

test('subscriptions-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104602);
  assert.equal(evaluate(-7).value, 104594);
});

test('subscriptions-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","subscriptions-feature-01","subscriptions-feature-02","subscriptions-feature-03","subscriptions-feature-04","subscriptions-data-01","subscriptions-data-02","subscriptions-data-03","subscriptions-data-04"]);
});
