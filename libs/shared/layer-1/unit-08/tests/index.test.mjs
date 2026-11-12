// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-08/index.js';

test('shared-l1-08: dependency-derived value', () => {
  assert.equal(weight, 33);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-08', value: 40, dependencies: ["shared-l0-08","shared-l0-01","shared-l0-03","shared-l0-05"] });
});

test('shared-l1-08: default and negative seeds', () => {
  assert.equal(evaluate().value, 34);
  assert.equal(evaluate(-7).value, 26);
});

test('shared-l1-08: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-08: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-08');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-08","shared-l0-01","shared-l0-03","shared-l0-05"]);
});
