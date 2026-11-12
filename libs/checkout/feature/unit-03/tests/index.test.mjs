// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-feature-03/index.js';

test('checkout-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22274);
  assert.deepEqual(evaluate(7), { project: 'checkout-feature-03', value: 22281, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-03","catalog-data-04"] });
});

test('checkout-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22275);
  assert.equal(evaluate(-7).value, 22267);
});

test('checkout-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-03","catalog-data-04"]);
});
