// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-feature-04/index.js';

test('catalog-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22326);
  assert.deepEqual(evaluate(7), { project: 'catalog-feature-04', value: 22333, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-04","billing-data-01"] });
});

test('catalog-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22327);
  assert.equal(evaluate(-7).value, 22319);
});

test('catalog-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-04","billing-data-01"]);
});
