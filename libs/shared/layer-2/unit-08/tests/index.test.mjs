// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l2-08/index.js';

test('shared-l2-08: dependency-derived value', () => {
  assert.equal(weight, 128);
  assert.deepEqual(evaluate(7), { project: 'shared-l2-08', value: 135, dependencies: ["shared-l1-08","shared-l1-01","shared-l1-03","shared-l1-05"] });
});

test('shared-l2-08: default and negative seeds', () => {
  assert.equal(evaluate().value, 129);
  assert.equal(evaluate(-7).value, 121);
});

test('shared-l2-08: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l2-08: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l2-08');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l1-08","shared-l1-01","shared-l1-03","shared-l1-05"]);
});
