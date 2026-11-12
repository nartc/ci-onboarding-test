// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/inventory-api/index.js';

test('inventory-api: dependency-derived value', () => {
  assert.equal(weight, 104509);
  assert.deepEqual(evaluate(7), { project: 'inventory-api', value: 104516, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04"] });
});

test('inventory-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104510);
  assert.equal(evaluate(-7).value, 104502);
});

test('inventory-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","inventory-feature-01","inventory-feature-02","inventory-feature-03","inventory-feature-04","inventory-data-01","inventory-data-02","inventory-data-03","inventory-data-04"]);
});
