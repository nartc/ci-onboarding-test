// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shipping-ui-04/index.js';

test('shipping-ui-04: dependency-derived value', () => {
  assert.equal(weight, 135038);
  assert.deepEqual(evaluate(7), { project: 'shipping-ui-04', value: 135045, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-04","inventory-feature-01"] });
});

test('shipping-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 135039);
  assert.equal(evaluate(-7).value, 135031);
});

test('shipping-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","inventory-feature-04","inventory-feature-01"]);
});
