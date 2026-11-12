// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-ui-02/index.js';

test('checkout-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134316);
  assert.deepEqual(evaluate(7), { project: 'checkout-ui-02', value: 134323, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-02","catalog-feature-03"] });
});

test('checkout-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134317);
  assert.equal(evaluate(-7).value, 134309);
});

test('checkout-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-02","catalog-feature-03"]);
});
