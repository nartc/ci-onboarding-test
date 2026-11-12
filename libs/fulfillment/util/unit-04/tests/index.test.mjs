// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/fulfillment-util-04/index.js';

test('fulfillment-util-04: dependency-derived value', () => {
  assert.equal(weight, 515);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-util-04', value: 522, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"] });
});

test('fulfillment-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 516);
  assert.equal(evaluate(-7).value, 508);
});

test('fulfillment-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"]);
});
