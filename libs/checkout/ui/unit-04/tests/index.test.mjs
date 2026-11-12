// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-ui-04/index.js';

test('checkout-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134288);
  assert.deepEqual(evaluate(7), { project: 'checkout-ui-04', value: 134295, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-04","catalog-feature-01"] });
});

test('checkout-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134289);
  assert.equal(evaluate(-7).value, 134281);
});

test('checkout-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-04","catalog-feature-01"]);
});
