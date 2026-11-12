// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l0-08/index.js';

test('shared-l0-08: dependency-derived value', () => {
  assert.equal(weight, 8);
  assert.deepEqual(evaluate(7), { project: 'shared-l0-08', value: 15, dependencies: [] });
});

test('shared-l0-08: default and negative seeds', () => {
  assert.equal(evaluate().value, 9);
  assert.equal(evaluate(-7).value, 1);
});

test('shared-l0-08: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l0-08: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l0-08');
  assert.deepEqual(buildMetadata.dependencies, []);
});
