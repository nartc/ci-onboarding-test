// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-util-04/index.js';

test('billing-util-04: dependency-derived value', () => {
  assert.equal(weight, 512);
  assert.deepEqual(evaluate(7), { project: 'billing-util-04', value: 519, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"] });
});

test('billing-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 513);
  assert.equal(evaluate(-7).value, 505);
});

test('billing-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"]);
});
