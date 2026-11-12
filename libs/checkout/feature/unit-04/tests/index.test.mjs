// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-feature-04/index.js';

test('checkout-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22292);
  assert.deepEqual(evaluate(7), { project: 'checkout-feature-04', value: 22299, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-04","catalog-data-01"] });
});

test('checkout-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22293);
  assert.equal(evaluate(-7).value, 22285);
});

test('checkout-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-04","catalog-data-01"]);
});
