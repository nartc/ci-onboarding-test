// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-data-04/index.js';

test('shipping-data-04: dependency-derived value', () => {
  assert.equal(weight, 3665);
  assert.deepEqual(evaluate(7), { project: 'shipping-data-04', value: 3672, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-04","inventory-util-01"] });
});

test('shipping-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3666);
  assert.equal(evaluate(-7).value, 3658);
});

test('shipping-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-04","inventory-util-01"]);
});
