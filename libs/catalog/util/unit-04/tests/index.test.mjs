// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-util-04/index.js';

test('catalog-util-04: dependency-derived value', () => {
  assert.equal(weight, 519);
  assert.deepEqual(evaluate(7), { project: 'catalog-util-04', value: 526, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"] });
});

test('catalog-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 520);
  assert.equal(evaluate(-7).value, 512);
});

test('catalog-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"]);
});
