// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/compliance-e2e/index.js';

test('compliance-e2e: dependency-derived value', () => {
  assert.equal(weight, 1898940);
  assert.deepEqual(evaluate(7), { project: 'compliance-e2e', value: 1898947, dependencies: ["compliance-api","compliance-portal","partners-portal"] });
});

test('compliance-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1898941);
  assert.equal(evaluate(-7).value, 1898933);
});

test('compliance-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["compliance-api","compliance-portal","partners-portal"]);
});
