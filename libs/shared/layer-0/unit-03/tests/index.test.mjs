// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l0-03/index.js';

test('shared-l0-03: dependency-derived value', () => {
  assert.equal(weight, 3);
  assert.deepEqual(evaluate(7), { project: 'shared-l0-03', value: 10, dependencies: [] });
});

test('shared-l0-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 4);
  assert.equal(evaluate(-7).value, -4);
});

test('shared-l0-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l0-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l0-03');
  assert.deepEqual(buildMetadata.dependencies, []);
});
