// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-feature-02/index.js';

test('checkout-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22276);
  assert.deepEqual(evaluate(7), { project: 'checkout-feature-02', value: 22283, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-02","catalog-data-03"] });
});

test('checkout-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22277);
  assert.equal(evaluate(-7).value, 22269);
});

test('checkout-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-02","catalog-data-03"]);
});
