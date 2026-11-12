// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l0-07/index.js';

test('shared-l0-07: dependency-derived value', () => {
  assert.equal(weight, 7);
  assert.deepEqual(evaluate(7), { project: 'shared-l0-07', value: 14, dependencies: [] });
});

test('shared-l0-07: default and negative seeds', () => {
  assert.equal(evaluate().value, 8);
  assert.equal(evaluate(-7).value, 0);
});

test('shared-l0-07: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l0-07: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l0-07');
  assert.deepEqual(buildMetadata.dependencies, []);
});
