// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l2-07/index.js';

test('shared-l2-07: dependency-derived value', () => {
  assert.equal(weight, 131);
  assert.deepEqual(evaluate(7), { project: 'shared-l2-07', value: 138, dependencies: ["shared-l1-07","shared-l1-08","shared-l1-02","shared-l1-04"] });
});

test('shared-l2-07: default and negative seeds', () => {
  assert.equal(evaluate().value, 132);
  assert.equal(evaluate(-7).value, 124);
});

test('shared-l2-07: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l2-07: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l2-07');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l1-07","shared-l1-08","shared-l1-02","shared-l1-04"]);
});
