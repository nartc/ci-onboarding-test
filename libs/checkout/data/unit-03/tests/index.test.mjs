// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-data-03/index.js';

test('checkout-data-03: dependency-derived value', () => {
  assert.equal(weight, 3630);
  assert.deepEqual(evaluate(7), { project: 'checkout-data-03', value: 3637, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","checkout-util-01","checkout-util-02","checkout-util-03","checkout-util-04","catalog-util-03","catalog-util-04"] });
});

test('checkout-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3631);
  assert.equal(evaluate(-7).value, 3623);
});

test('checkout-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","checkout-util-01","checkout-util-02","checkout-util-03","checkout-util-04","catalog-util-03","catalog-util-04"]);
});
