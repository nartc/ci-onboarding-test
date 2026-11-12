// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-data-02/index.js';

test('inventory-data-02: dependency-derived value', () => {
  assert.equal(weight, 3648);
  assert.deepEqual(evaluate(7), { project: 'inventory-data-02', value: 3655, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-02","checkout-util-03"] });
});

test('inventory-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3649);
  assert.equal(evaluate(-7).value, 3641);
});

test('inventory-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-02","checkout-util-03"]);
});
