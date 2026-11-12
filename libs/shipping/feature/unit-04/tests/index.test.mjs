// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-feature-04/index.js';

test('shipping-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22454);
  assert.deepEqual(evaluate(7), { project: 'shipping-feature-04', value: 22461, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04","inventory-data-04","inventory-data-01"] });
});

test('shipping-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22455);
  assert.equal(evaluate(-7).value, 22447);
});

test('shipping-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04","inventory-data-04","inventory-data-01"]);
});
