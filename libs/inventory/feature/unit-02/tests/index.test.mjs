// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-feature-02/index.js';

test('inventory-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22365);
  assert.deepEqual(evaluate(7), { project: 'inventory-feature-02', value: 22372, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-02","checkout-data-03"] });
});

test('inventory-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22366);
  assert.equal(evaluate(-7).value, 22358);
});

test('inventory-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-02","checkout-data-03"]);
});
