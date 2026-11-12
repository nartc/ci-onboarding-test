// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l0-04/index.js';

test('shared-l0-04: dependency-derived value', () => {
  assert.equal(weight, 4);
  assert.deepEqual(evaluate(7), { project: 'shared-l0-04', value: 11, dependencies: [] });
});

test('shared-l0-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 5);
  assert.equal(evaluate(-7).value, -3);
});

test('shared-l0-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l0-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l0-04');
  assert.deepEqual(buildMetadata.dependencies, []);
});
