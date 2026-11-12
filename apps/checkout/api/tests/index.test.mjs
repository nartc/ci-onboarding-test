// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/checkout-api/index.js';

test('checkout-api: dependency-derived value', () => {
  assert.equal(weight, 104166);
  assert.deepEqual(evaluate(7), { project: 'checkout-api', value: 104173, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04"] });
});

test('checkout-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104167);
  assert.equal(evaluate(-7).value, 104159);
});

test('checkout-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","checkout-data-01","checkout-data-02","checkout-data-03","checkout-data-04"]);
});
