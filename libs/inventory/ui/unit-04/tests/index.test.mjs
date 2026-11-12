// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-ui-04/index.js';

test('inventory-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134516);
  assert.deepEqual(evaluate(7), { project: 'inventory-ui-04', value: 134523, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-04","checkout-feature-01"] });
});

test('inventory-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134517);
  assert.equal(evaluate(-7).value, 134509);
});

test('inventory-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","checkout-feature-04","checkout-feature-01"]);
});
