// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l2-05/index.js';

test('shared-l2-05: dependency-derived value', () => {
  assert.equal(weight, 129);
  assert.deepEqual(evaluate(7), { project: 'shared-l2-05', value: 136, dependencies: ["shared-l1-05","shared-l1-06","shared-l1-08","shared-l1-02"] });
});

test('shared-l2-05: default and negative seeds', () => {
  assert.equal(evaluate().value, 130);
  assert.equal(evaluate(-7).value, 122);
});

test('shared-l2-05: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l2-05: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l2-05');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l1-05","shared-l1-06","shared-l1-08","shared-l1-02"]);
});
