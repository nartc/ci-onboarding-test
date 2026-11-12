// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-07/index.js';

test('shared-l1-07: dependency-derived value', () => {
  assert.equal(weight, 36);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-07', value: 43, dependencies: ["shared-l0-07","shared-l0-08","shared-l0-02","shared-l0-04"] });
});

test('shared-l1-07: default and negative seeds', () => {
  assert.equal(evaluate().value, 37);
  assert.equal(evaluate(-7).value, 29);
});

test('shared-l1-07: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-07: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-07');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-07","shared-l0-08","shared-l0-02","shared-l0-04"]);
});
