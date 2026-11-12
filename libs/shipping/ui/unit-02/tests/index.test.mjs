// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-ui-02/index.js';

test('shipping-ui-02: dependency-derived value', () => {
  assert.equal(weight, 135048);
  assert.deepEqual(evaluate(7), { project: 'shipping-ui-02', value: 135055, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-02","inventory-feature-03"] });
});

test('shipping-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 135049);
  assert.equal(evaluate(-7).value, 135041);
});

test('shipping-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-02","inventory-feature-03"]);
});
