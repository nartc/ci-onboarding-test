// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-ui-01/index.js';

test('shipping-ui-01: dependency-derived value', () => {
  assert.equal(weight, 135057);
  assert.deepEqual(evaluate(7), { project: 'shipping-ui-01', value: 135064, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-01","inventory-feature-02"] });
});

test('shipping-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 135058);
  assert.equal(evaluate(-7).value, 135050);
});

test('shipping-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-01","inventory-feature-02"]);
});
