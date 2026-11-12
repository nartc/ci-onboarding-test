// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-data-01/index.js';

test('shipping-data-01: dependency-derived value', () => {
  assert.equal(weight, 3663);
  assert.deepEqual(evaluate(7), { project: 'shipping-data-01', value: 3670, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-01","inventory-util-02"] });
});

test('shipping-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3664);
  assert.equal(evaluate(-7).value, 3656);
});

test('shipping-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-01","inventory-util-02"]);
});
