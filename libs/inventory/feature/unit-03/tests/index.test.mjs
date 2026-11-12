// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-feature-03/index.js';

test('inventory-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22348);
  assert.deepEqual(evaluate(7), { project: 'inventory-feature-03', value: 22355, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-03","checkout-data-04"] });
});

test('inventory-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22349);
  assert.equal(evaluate(-7).value, 22341);
});

test('inventory-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04","checkout-data-03","checkout-data-04"]);
});
