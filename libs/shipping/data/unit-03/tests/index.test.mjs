// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-data-03/index.js';

test('shipping-data-03: dependency-derived value', () => {
  assert.equal(weight, 3655);
  assert.deepEqual(evaluate(7), { project: 'shipping-data-03', value: 3662, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-03","inventory-util-04"] });
});

test('shipping-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3656);
  assert.equal(evaluate(-7).value, 3648);
});

test('shipping-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","shipping-util-01","shipping-util-02","shipping-util-03","shipping-util-04","inventory-util-03","inventory-util-04"]);
});
