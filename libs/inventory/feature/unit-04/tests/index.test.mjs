// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-feature-04/index.js';

test('inventory-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22339);
  assert.deepEqual(evaluate(7), { project: 'inventory-feature-04', value: 22346, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-04","checkout-data-01"] });
});

test('inventory-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22340);
  assert.equal(evaluate(-7).value, 22332);
});

test('inventory-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-04","checkout-data-01"]);
});
