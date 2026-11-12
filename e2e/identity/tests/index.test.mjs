// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/identity-e2e/index.js';

test('identity-e2e: dependency-derived value', () => {
  assert.equal(weight, 1903398);
  assert.deepEqual(evaluate(7), { project: 'identity-e2e', value: 1903405, dependencies: ["identity-api","identity-portal","commerce-portal"] });
});

test('identity-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1903399);
  assert.equal(evaluate(-7).value, 1903391);
});

test('identity-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["identity-api","identity-portal","commerce-portal"]);
});
