// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/checkout-portal/index.js';

test('checkout-portal: dependency-derived value', () => {
  assert.equal(weight, 896082);
  assert.deepEqual(evaluate(7), { project: 'checkout-portal', value: 896089, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","checkout-ui-01","checkout-ui-02","checkout-ui-03","checkout-ui-04","catalog-ui-01","catalog-ui-02"] });
});

test('checkout-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 896083);
  assert.equal(evaluate(-7).value, 896075);
});

test('checkout-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","checkout-ui-01","checkout-ui-02","checkout-ui-03","checkout-ui-04","catalog-ui-01","catalog-ui-02"]);
});
