// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-feature-01/index.js';

test('catalog-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22303);
  assert.deepEqual(evaluate(7), { project: 'catalog-feature-01', value: 22310, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-01","billing-data-02"] });
});

test('catalog-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22304);
  assert.equal(evaluate(-7).value, 22296);
});

test('catalog-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-01","billing-data-02"]);
});
