// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/marketing-e2e/index.js';

test('marketing-e2e: dependency-derived value', () => {
  assert.equal(weight, 1896158);
  assert.deepEqual(evaluate(7), { project: 'marketing-e2e', value: 1896165, dependencies: ["marketing-api","marketing-portal","support-portal"] });
});

test('marketing-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1896159);
  assert.equal(evaluate(-7).value, 1896151);
});

test('marketing-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["marketing-api","marketing-portal","support-portal"]);
});
