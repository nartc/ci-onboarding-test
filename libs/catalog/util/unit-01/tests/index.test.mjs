// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-util-01/index.js';

test('catalog-util-01: dependency-derived value', () => {
  assert.equal(weight, 513);
  assert.deepEqual(evaluate(7), { project: 'catalog-util-01', value: 520, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('catalog-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 514);
  assert.equal(evaluate(-7).value, 506);
});

test('catalog-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
