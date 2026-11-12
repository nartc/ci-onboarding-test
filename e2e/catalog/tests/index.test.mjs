// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/catalog-e2e/index.js';

test('catalog-e2e: dependency-derived value', () => {
  assert.equal(weight, 1902160);
  assert.deepEqual(evaluate(7), { project: 'catalog-e2e', value: 1902167, dependencies: ["catalog-api","catalog-portal","billing-portal"] });
});

test('catalog-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1902161);
  assert.equal(evaluate(-7).value, 1902153);
});

test('catalog-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["catalog-api","catalog-portal","billing-portal"]);
});
