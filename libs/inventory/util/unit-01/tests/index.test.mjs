// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-util-01/index.js';

test('inventory-util-01: dependency-derived value', () => {
  assert.equal(weight, 521);
  assert.deepEqual(evaluate(7), { project: 'inventory-util-01', value: 528, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"] });
});

test('inventory-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 522);
  assert.equal(evaluate(-7).value, 514);
});

test('inventory-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"]);
});
