// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-05/index.js';

test('shared-l1-05: dependency-derived value', () => {
  assert.equal(weight, 34);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-05', value: 41, dependencies: ["shared-l0-05","shared-l0-06","shared-l0-08","shared-l0-02"] });
});

test('shared-l1-05: default and negative seeds', () => {
  assert.equal(evaluate().value, 35);
  assert.equal(evaluate(-7).value, 27);
});

test('shared-l1-05: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-05: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-05');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-05","shared-l0-06","shared-l0-08","shared-l0-02"]);
});
