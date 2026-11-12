// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-util-02/index.js';

test('checkout-util-02: dependency-derived value', () => {
  assert.equal(weight, 518);
  assert.deepEqual(evaluate(7), { project: 'checkout-util-02', value: 525, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"] });
});

test('checkout-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 519);
  assert.equal(evaluate(-7).value, 511);
});

test('checkout-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"]);
});
