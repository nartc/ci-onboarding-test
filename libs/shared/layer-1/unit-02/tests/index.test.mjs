// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-02/index.js';

test('shared-l1-02: dependency-derived value', () => {
  assert.equal(weight, 27);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-02', value: 34, dependencies: ["shared-l0-02","shared-l0-03","shared-l0-05","shared-l0-07"] });
});

test('shared-l1-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 28);
  assert.equal(evaluate(-7).value, 20);
});

test('shared-l1-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-02","shared-l0-03","shared-l0-05","shared-l0-07"]);
});
