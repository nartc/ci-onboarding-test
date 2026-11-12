// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/experimentation-e2e/index.js';

test('experimentation-e2e: dependency-derived value', () => {
  assert.equal(weight, 1900282);
  assert.deepEqual(evaluate(7), { project: 'experimentation-e2e', value: 1900289, dependencies: ["experimentation-api","experimentation-portal","observability-portal"] });
});

test('experimentation-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1900283);
  assert.equal(evaluate(-7).value, 1900275);
});

test('experimentation-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["experimentation-api","experimentation-portal","observability-portal"]);
});
