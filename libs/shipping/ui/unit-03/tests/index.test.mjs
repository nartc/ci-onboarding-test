// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-ui-03/index.js';

test('shipping-ui-03: dependency-derived value', () => {
  assert.equal(weight, 135019);
  assert.deepEqual(evaluate(7), { project: 'shipping-ui-03', value: 135026, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-03","inventory-feature-04"] });
});

test('shipping-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 135020);
  assert.equal(evaluate(-7).value, 135012);
});

test('shipping-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-03","inventory-feature-04"]);
});
