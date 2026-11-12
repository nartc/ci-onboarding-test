// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/subscriptions-e2e/index.js';

test('subscriptions-e2e: dependency-derived value', () => {
  assert.equal(weight, 1895051);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-e2e', value: 1895058, dependencies: ["subscriptions-api","subscriptions-portal","pricing-portal"] });
});

test('subscriptions-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1895052);
  assert.equal(evaluate(-7).value, 1895044);
});

test('subscriptions-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["subscriptions-api","subscriptions-portal","pricing-portal"]);
});
