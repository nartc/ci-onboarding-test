// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-util-03/index.js';

test('catalog-util-03: dependency-derived value', () => {
  assert.equal(weight, 515);
  assert.deepEqual(evaluate(7), { project: 'catalog-util-03', value: 522, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"] });
});

test('catalog-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 516);
  assert.equal(evaluate(-7).value, 508);
});

test('catalog-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"]);
});
