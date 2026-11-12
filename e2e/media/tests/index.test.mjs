// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/media-e2e/index.js';

test('media-e2e: dependency-derived value', () => {
  assert.equal(weight, 1902192);
  assert.deepEqual(evaluate(7), { project: 'media-e2e', value: 1902199, dependencies: ["media-api","media-portal","content-portal"] });
});

test('media-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1902193);
  assert.equal(evaluate(-7).value, 1902185);
});

test('media-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["media-api","media-portal","content-portal"]);
});
