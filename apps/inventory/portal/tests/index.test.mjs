// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/inventory-portal/index.js';

test('inventory-portal: dependency-derived value', () => {
  assert.equal(weight, 896522);
  assert.deepEqual(evaluate(7), { project: 'inventory-portal', value: 896529, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","inventory-ui-01","inventory-ui-02","inventory-ui-03","inventory-ui-04","checkout-ui-01","checkout-ui-02"] });
});

test('inventory-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 896523);
  assert.equal(evaluate(-7).value, 896515);
});

test('inventory-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","inventory-ui-01","inventory-ui-02","inventory-ui-03","inventory-ui-04","checkout-ui-01","checkout-ui-02"]);
});
