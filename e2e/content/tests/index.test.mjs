// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/content-e2e/index.js';

test('content-e2e: dependency-derived value', () => {
  assert.equal(weight, 1898246);
  assert.deepEqual(evaluate(7), { project: 'content-e2e', value: 1898253, dependencies: ["content-api","content-portal","marketing-portal"] });
});

test('content-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1898247);
  assert.equal(evaluate(-7).value, 1898239);
});

test('content-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["content-api","content-portal","marketing-portal"]);
});
