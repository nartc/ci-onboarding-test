// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/shipping-api/index.js';

test('shipping-api: dependency-derived value', () => {
  assert.equal(weight, 104982);
  assert.deepEqual(evaluate(7), { project: 'shipping-api', value: 104989, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04"] });
});

test('shipping-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104983);
  assert.equal(evaluate(-7).value, 104975);
});

test('shipping-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shipping-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shipping-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","shipping-feature-01","shipping-feature-02","shipping-feature-03","shipping-feature-04","shipping-data-01","shipping-data-02","shipping-data-03","shipping-data-04"]);
});
