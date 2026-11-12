// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-ui-04/index.js';

test('catalog-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134620);
  assert.deepEqual(evaluate(7), { project: 'catalog-ui-04', value: 134627, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-04","billing-feature-01"] });
});

test('catalog-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134621);
  assert.equal(evaluate(-7).value, 134613);
});

test('catalog-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-04","billing-feature-01"]);
});
