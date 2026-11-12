// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-data-03/index.js';

test('inventory-data-03: dependency-derived value', () => {
  assert.equal(weight, 3648);
  assert.deepEqual(evaluate(7), { project: 'inventory-data-03', value: 3655, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-03","checkout-util-04"] });
});

test('inventory-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3649);
  assert.equal(evaluate(-7).value, 3641);
});

test('inventory-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","inventory-util-01","inventory-util-02","inventory-util-03","inventory-util-04","checkout-util-03","checkout-util-04"]);
});
