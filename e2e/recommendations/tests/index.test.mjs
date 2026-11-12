// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/recommendations-e2e/index.js';

test('recommendations-e2e: dependency-derived value', () => {
  assert.equal(weight, 1899722);
  assert.deepEqual(evaluate(7), { project: 'recommendations-e2e', value: 1899729, dependencies: ["recommendations-api","recommendations-portal","media-portal"] });
});

test('recommendations-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1899723);
  assert.equal(evaluate(-7).value, 1899715);
});

test('recommendations-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["recommendations-api","recommendations-portal","media-portal"]);
});
