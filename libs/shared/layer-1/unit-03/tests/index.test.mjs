// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-03/index.js';

test('shared-l1-03: dependency-derived value', () => {
  assert.equal(weight, 32);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-03', value: 39, dependencies: ["shared-l0-03","shared-l0-04","shared-l0-06","shared-l0-08"] });
});

test('shared-l1-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 33);
  assert.equal(evaluate(-7).value, 25);
});

test('shared-l1-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-03","shared-l0-04","shared-l0-06","shared-l0-08"]);
});
