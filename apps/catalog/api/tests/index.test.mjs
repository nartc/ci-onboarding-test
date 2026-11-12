// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/catalog-api/index.js';

test('catalog-api: dependency-derived value', () => {
  assert.equal(weight, 104317);
  assert.deepEqual(evaluate(7), { project: 'catalog-api', value: 104324, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04"] });
});

test('catalog-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104318);
  assert.equal(evaluate(-7).value, 104310);
});

test('catalog-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04"]);
});
