// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-ui-02/index.js';

test('inventory-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134481);
  assert.deepEqual(evaluate(7), { project: 'inventory-ui-02', value: 134488, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-02","checkout-feature-03"] });
});

test('inventory-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134482);
  assert.equal(evaluate(-7).value, 134474);
});

test('inventory-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-02","checkout-feature-03"]);
});
