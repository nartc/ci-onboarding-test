// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/checkout-ui-03/index.js';

test('checkout-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134324);
  assert.deepEqual(evaluate(7), { project: 'checkout-ui-03', value: 134331, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-03","catalog-feature-04"] });
});

test('checkout-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134325);
  assert.equal(evaluate(-7).value, 134317);
});

test('checkout-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('checkout-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'checkout-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","checkout-feature-01","checkout-feature-02","checkout-feature-03","checkout-feature-04","catalog-feature-03","catalog-feature-04"]);
});
