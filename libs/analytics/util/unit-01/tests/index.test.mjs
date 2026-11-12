// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-util-01/index.js';

test('analytics-util-01: dependency-derived value', () => {
  assert.equal(weight, 519);
  assert.deepEqual(evaluate(7), { project: 'analytics-util-01', value: 526, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"] });
});

test('analytics-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 520);
  assert.equal(evaluate(-7).value, 512);
});

test('analytics-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"]);
});
