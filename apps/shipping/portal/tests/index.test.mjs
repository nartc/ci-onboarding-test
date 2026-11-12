// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/shipping-portal/index.js';

test('shipping-portal: dependency-derived value', () => {
  assert.equal(weight, 899481);
  assert.deepEqual(evaluate(7), { project: 'shipping-portal', value: 899488, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","shipping-ui-01","shipping-ui-02","shipping-ui-03","shipping-ui-04","inventory-ui-01","inventory-ui-02"] });
});

test('shipping-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899482);
  assert.equal(evaluate(-7).value, 899474);
});

test('shipping-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","shipping-ui-01","shipping-ui-02","shipping-ui-03","shipping-ui-04","inventory-ui-01","inventory-ui-02"]);
});
