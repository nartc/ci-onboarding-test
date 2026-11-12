// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-ui-01/index.js';

test('inventory-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134501);
  assert.deepEqual(evaluate(7), { project: 'inventory-ui-01', value: 134508, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-01","checkout-feature-02"] });
});

test('inventory-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134502);
  assert.equal(evaluate(-7).value, 134494);
});

test('inventory-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-01","checkout-feature-02"]);
});
