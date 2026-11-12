// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-ui-01/index.js';

test('checkout-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134284);
  assert.deepEqual(evaluate(7), { project: 'checkout-ui-01', value: 134291, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-01","catalog-feature-02"] });
});

test('checkout-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134285);
  assert.equal(evaluate(-7).value, 134277);
});

test('checkout-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-01","catalog-feature-02"]);
});
