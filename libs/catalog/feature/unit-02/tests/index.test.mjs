// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-feature-02/index.js';

test('catalog-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22322);
  assert.deepEqual(evaluate(7), { project: 'catalog-feature-02', value: 22329, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-02","billing-data-03"] });
});

test('catalog-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22323);
  assert.equal(evaluate(-7).value, 22315);
});

test('catalog-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-02","billing-data-03"]);
});
