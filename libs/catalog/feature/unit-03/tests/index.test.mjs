// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-feature-03/index.js';

test('catalog-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22337);
  assert.deepEqual(evaluate(7), { project: 'catalog-feature-03', value: 22344, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-03","billing-data-04"] });
});

test('catalog-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22338);
  assert.equal(evaluate(-7).value, 22330);
});

test('catalog-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","catalog-data-01","catalog-data-02","catalog-data-03","catalog-data-04","billing-data-03","billing-data-04"]);
});
