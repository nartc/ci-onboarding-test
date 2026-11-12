// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-data-04/index.js';

test('inventory-data-04: dependency-derived value', () => {
  assert.equal(weight, 3643);
  assert.deepEqual(evaluate(7), { project: 'inventory-data-04', value: 3650, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-04","checkout-util-01"] });
});

test('inventory-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3644);
  assert.equal(evaluate(-7).value, 3636);
});

test('inventory-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-04","checkout-util-01"]);
});
