// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/pricing-e2e/index.js';

test('pricing-e2e: dependency-derived value', () => {
  assert.equal(weight, 1894603);
  assert.deepEqual(evaluate(7), { project: 'pricing-e2e', value: 1894610, dependencies: ["pricing-api","pricing-portal","recommendations-portal"] });
});

test('pricing-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1894604);
  assert.equal(evaluate(-7).value, 1894596);
});

test('pricing-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["pricing-api","pricing-portal","recommendations-portal"]);
});
