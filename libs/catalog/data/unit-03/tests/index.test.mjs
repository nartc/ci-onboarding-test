// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-data-03/index.js';

test('catalog-data-03: dependency-derived value', () => {
  assert.equal(weight, 3616);
  assert.deepEqual(evaluate(7), { project: 'catalog-data-03', value: 3623, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","catalog-util-01","catalog-util-02","catalog-util-03","catalog-util-04","billing-util-03","billing-util-04"] });
});

test('catalog-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3617);
  assert.equal(evaluate(-7).value, 3609);
});

test('catalog-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","catalog-util-01","catalog-util-02","catalog-util-03","catalog-util-04","billing-util-03","billing-util-04"]);
});
