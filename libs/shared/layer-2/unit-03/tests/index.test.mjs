// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l2-03/index.js';

test('shared-l2-03: dependency-derived value', () => {
  assert.equal(weight, 127);
  assert.deepEqual(evaluate(7), { project: 'shared-l2-03', value: 134, dependencies: ["shared-l1-03","shared-l1-04","shared-l1-06","shared-l1-08"] });
});

test('shared-l2-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 128);
  assert.equal(evaluate(-7).value, 120);
});

test('shared-l2-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l2-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l2-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l1-03","shared-l1-04","shared-l1-06","shared-l1-08"]);
});
