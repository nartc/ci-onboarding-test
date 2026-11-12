// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/commerce-e2e/index.js';

test('commerce-e2e: dependency-derived value', () => {
  assert.equal(weight, 1902900);
  assert.deepEqual(evaluate(7), { project: 'commerce-e2e', value: 1902907, dependencies: ["commerce-api","commerce-portal","experimentation-portal"] });
});

test('commerce-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1902901);
  assert.equal(evaluate(-7).value, 1902893);
});

test('commerce-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["commerce-api","commerce-portal","experimentation-portal"]);
});
