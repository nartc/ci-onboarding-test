// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/search-e2e/index.js';

test('search-e2e: dependency-derived value', () => {
  assert.equal(weight, 1893657);
  assert.deepEqual(evaluate(7), { project: 'search-e2e', value: 1893664, dependencies: ["search-api","search-portal","notifications-portal"] });
});

test('search-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1893658);
  assert.equal(evaluate(-7).value, 1893650);
});

test('search-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["search-api","search-portal","notifications-portal"]);
});
