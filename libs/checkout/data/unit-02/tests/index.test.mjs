// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-data-02/index.js';

test('checkout-data-02: dependency-derived value', () => {
  assert.equal(weight, 3624);
  assert.deepEqual(evaluate(7), { project: 'checkout-data-02', value: 3631, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","checkout-util-01","checkout-util-02","checkout-util-03","checkout-util-04","catalog-util-02","catalog-util-03"] });
});

test('checkout-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3625);
  assert.equal(evaluate(-7).value, 3617);
});

test('checkout-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","checkout-util-01","checkout-util-02","checkout-util-03","checkout-util-04","catalog-util-02","catalog-util-03"]);
});
