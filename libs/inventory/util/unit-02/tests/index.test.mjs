// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-util-02/index.js';

test('inventory-util-02: dependency-derived value', () => {
  assert.equal(weight, 525);
  assert.deepEqual(evaluate(7), { project: 'inventory-util-02', value: 532, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"] });
});

test('inventory-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 526);
  assert.equal(evaluate(-7).value, 518);
});

test('inventory-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"]);
});
