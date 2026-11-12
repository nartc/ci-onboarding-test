// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-data-02/index.js';

test('shipping-data-02: dependency-derived value', () => {
  assert.equal(weight, 3663);
  assert.deepEqual(evaluate(7), { project: 'shipping-data-02', value: 3670, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-02","inventory-util-03"] });
});

test('shipping-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3664);
  assert.equal(evaluate(-7).value, 3656);
});

test('shipping-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-02","inventory-util-03"]);
});
