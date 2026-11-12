// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-data-04/index.js';

test('checkout-data-04: dependency-derived value', () => {
  assert.equal(weight, 3626);
  assert.deepEqual(evaluate(7), { project: 'checkout-data-04', value: 3633, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","checkout-util-01","checkout-util-02","checkout-util-03","checkout-util-04","catalog-util-04","catalog-util-01"] });
});

test('checkout-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3627);
  assert.equal(evaluate(-7).value, 3619);
});

test('checkout-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","checkout-util-01","checkout-util-02","checkout-util-03","checkout-util-04","catalog-util-04","catalog-util-01"]);
});
