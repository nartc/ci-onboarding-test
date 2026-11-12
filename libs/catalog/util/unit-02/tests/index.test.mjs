// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-util-02/index.js';

test('catalog-util-02: dependency-derived value', () => {
  assert.equal(weight, 517);
  assert.deepEqual(evaluate(7), { project: 'catalog-util-02', value: 524, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('catalog-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 518);
  assert.equal(evaluate(-7).value, 510);
});

test('catalog-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
