// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l0-01/index.js';

test('shared-l0-01: dependency-derived value', () => {
  assert.equal(weight, 1);
  assert.deepEqual(evaluate(7), { project: 'shared-l0-01', value: 8, dependencies: [] });
});

test('shared-l0-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 2);
  assert.equal(evaluate(-7).value, -6);
});

test('shared-l0-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l0-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l0-01');
  assert.deepEqual(buildMetadata.dependencies, []);
});
