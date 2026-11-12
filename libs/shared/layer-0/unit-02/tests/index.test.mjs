// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l0-02/index.js';

test('shared-l0-02: dependency-derived value', () => {
  assert.equal(weight, 2);
  assert.deepEqual(evaluate(7), { project: 'shared-l0-02', value: 9, dependencies: [] });
});

test('shared-l0-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3);
  assert.equal(evaluate(-7).value, -5);
});

test('shared-l0-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l0-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l0-02');
  assert.deepEqual(buildMetadata.dependencies, []);
});
