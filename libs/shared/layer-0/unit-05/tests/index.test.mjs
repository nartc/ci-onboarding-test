// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l0-05/index.js';

test('shared-l0-05: dependency-derived value', () => {
  assert.equal(weight, 5);
  assert.deepEqual(evaluate(7), { project: 'shared-l0-05', value: 12, dependencies: [] });
});

test('shared-l0-05: default and negative seeds', () => {
  assert.equal(evaluate().value, 6);
  assert.equal(evaluate(-7).value, -2);
});

test('shared-l0-05: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l0-05: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l0-05');
  assert.deepEqual(buildMetadata.dependencies, []);
});
