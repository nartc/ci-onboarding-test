// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-util-04/index.js';

test('analytics-util-04: dependency-derived value', () => {
  assert.equal(weight, 527);
  assert.deepEqual(evaluate(7), { project: 'analytics-util-04', value: 534, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"] });
});

test('analytics-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 528);
  assert.equal(evaluate(-7).value, 520);
});

test('analytics-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"]);
});
