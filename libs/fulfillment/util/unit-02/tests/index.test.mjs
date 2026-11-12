// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-util-02/index.js';

test('fulfillment-util-02: dependency-derived value', () => {
  assert.equal(weight, 530);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-util-02', value: 537, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('fulfillment-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 531);
  assert.equal(evaluate(-7).value, 523);
});

test('fulfillment-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
