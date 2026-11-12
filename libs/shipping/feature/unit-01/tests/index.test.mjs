// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-feature-01/index.js';

test('shipping-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22452);
  assert.deepEqual(evaluate(7), { project: 'shipping-feature-01', value: 22459, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04","inventory-data-01","inventory-data-02"] });
});

test('shipping-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22453);
  assert.equal(evaluate(-7).value, 22445);
});

test('shipping-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04","inventory-data-01","inventory-data-02"]);
});
