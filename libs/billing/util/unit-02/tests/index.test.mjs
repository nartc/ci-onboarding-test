// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-util-02/index.js';

test('billing-util-02: dependency-derived value', () => {
  assert.equal(weight, 527);
  assert.deepEqual(evaluate(7), { project: 'billing-util-02', value: 534, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('billing-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 528);
  assert.equal(evaluate(-7).value, 520);
});

test('billing-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
