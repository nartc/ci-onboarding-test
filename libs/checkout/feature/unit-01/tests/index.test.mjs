// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-feature-01/index.js';

test('checkout-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22298);
  assert.deepEqual(evaluate(7), { project: 'checkout-feature-01', value: 22305, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-01","catalog-data-02"] });
});

test('checkout-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22299);
  assert.equal(evaluate(-7).value, 22291);
});

test('checkout-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04","catalog-data-01","catalog-data-02"]);
});
