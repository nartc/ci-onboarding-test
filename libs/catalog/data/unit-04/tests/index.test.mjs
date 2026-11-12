// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-data-04/index.js';

test('catalog-data-04: dependency-derived value', () => {
  assert.equal(weight, 3627);
  assert.deepEqual(evaluate(7), { project: 'catalog-data-04', value: 3634, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","catalog-util-01","catalog-util-02","catalog-util-03","catalog-util-04","billing-util-04","billing-util-01"] });
});

test('catalog-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3628);
  assert.equal(evaluate(-7).value, 3620);
});

test('catalog-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","catalog-util-01","catalog-util-02","catalog-util-03","catalog-util-04","billing-util-04","billing-util-01"]);
});
