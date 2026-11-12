// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-feature-03/index.js';

test('shipping-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22448);
  assert.deepEqual(evaluate(7), { project: 'shipping-feature-03', value: 22455, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04","inventory-data-03","inventory-data-04"] });
});

test('shipping-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22449);
  assert.equal(evaluate(-7).value, 22441);
});

test('shipping-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04","inventory-data-03","inventory-data-04"]);
});
