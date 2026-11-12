// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/reporting-e2e/index.js';

test('reporting-e2e: dependency-derived value', () => {
  assert.equal(weight, 1902635);
  assert.deepEqual(evaluate(7), { project: 'reporting-e2e', value: 1902642, dependencies: ["reporting-api","reporting-portal","analytics-portal"] });
});

test('reporting-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1902636);
  assert.equal(evaluate(-7).value, 1902628);
});

test('reporting-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["reporting-api","reporting-portal","analytics-portal"]);
});
