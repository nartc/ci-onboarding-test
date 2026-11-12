// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/support-e2e/index.js';

test('support-e2e: dependency-derived value', () => {
  assert.equal(weight, 1900397);
  assert.deepEqual(evaluate(7), { project: 'support-e2e', value: 1900404, dependencies: ["support-api","support-portal","reporting-portal"] });
});

test('support-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1900398);
  assert.equal(evaluate(-7).value, 1900390);
});

test('support-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["support-api","support-portal","reporting-portal"]);
});
