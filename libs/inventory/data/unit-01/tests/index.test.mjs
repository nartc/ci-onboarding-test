// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-data-01/index.js';

test('inventory-data-01: dependency-derived value', () => {
  assert.equal(weight, 3642);
  assert.deepEqual(evaluate(7), { project: 'inventory-data-01', value: 3649, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-01","checkout-util-02"] });
});

test('inventory-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3643);
  assert.equal(evaluate(-7).value, 3635);
});

test('inventory-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-01","checkout-util-02"]);
});
