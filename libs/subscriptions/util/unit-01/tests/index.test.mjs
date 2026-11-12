// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-util-01/index.js';

test('subscriptions-util-01: dependency-derived value', () => {
  assert.equal(weight, 517);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-util-01', value: 524, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"] });
});

test('subscriptions-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 518);
  assert.equal(evaluate(-7).value, 510);
});

test('subscriptions-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"]);
});
