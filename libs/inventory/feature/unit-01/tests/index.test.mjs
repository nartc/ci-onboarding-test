// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-feature-01/index.js';

test('inventory-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22355);
  assert.deepEqual(evaluate(7), { project: 'inventory-feature-01', value: 22362, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-01","checkout-data-02"] });
});

test('inventory-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22356);
  assert.equal(evaluate(-7).value, 22348);
});

test('inventory-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-01","checkout-data-02"]);
});
