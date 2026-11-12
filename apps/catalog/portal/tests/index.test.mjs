// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/catalog-portal/index.js';

test('catalog-portal: dependency-derived value', () => {
  assert.equal(weight, 898170);
  assert.deepEqual(evaluate(7), { project: 'catalog-portal', value: 898177, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","catalog-ui-01","catalog-ui-02","catalog-ui-03","catalog-ui-04","billing-ui-01","billing-ui-02"] });
});

test('catalog-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 898171);
  assert.equal(evaluate(-7).value, 898163);
});

test('catalog-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","catalog-ui-01","catalog-ui-02","catalog-ui-03","catalog-ui-04","billing-ui-01","billing-ui-02"]);
});
