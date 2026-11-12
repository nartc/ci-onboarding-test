// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/observability-e2e/index.js';

test('observability-e2e: dependency-derived value', () => {
  assert.equal(weight, 1896914);
  assert.deepEqual(evaluate(7), { project: 'observability-e2e', value: 1896921, dependencies: ["observability-api","observability-portal","compliance-portal"] });
});

test('observability-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1896915);
  assert.equal(evaluate(-7).value, 1896907);
});

test('observability-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["observability-api","observability-portal","compliance-portal"]);
});
