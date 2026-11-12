// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-data-02/index.js';

test('catalog-data-02: dependency-derived value', () => {
  assert.equal(weight, 3633);
  assert.deepEqual(evaluate(7), { project: 'catalog-data-02', value: 3640, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","catalog-util-01","catalog-util-02","catalog-util-03","catalog-util-04","billing-util-02","billing-util-03"] });
});

test('catalog-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3634);
  assert.equal(evaluate(-7).value, 3626);
});

test('catalog-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","catalog-util-01","catalog-util-02","catalog-util-03","catalog-util-04","billing-util-02","billing-util-03"]);
});
