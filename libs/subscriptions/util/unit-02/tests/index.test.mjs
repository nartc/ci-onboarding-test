// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/subscriptions-util-02/index.js';

test('subscriptions-util-02: dependency-derived value', () => {
  assert.equal(weight, 523);
  assert.deepEqual(evaluate(7), { project: 'subscriptions-util-02', value: 530, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('subscriptions-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 524);
  assert.equal(evaluate(-7).value, 516);
});

test('subscriptions-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('subscriptions-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'subscriptions-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
