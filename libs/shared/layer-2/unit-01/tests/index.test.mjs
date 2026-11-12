// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l2-01/index.js';

test('shared-l2-01: dependency-derived value', () => {
  assert.equal(weight, 126);
  assert.deepEqual(evaluate(7), { project: 'shared-l2-01', value: 133, dependencies: ["shared-l1-01","shared-l1-02","shared-l1-04","shared-l1-06"] });
});

test('shared-l2-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 127);
  assert.equal(evaluate(-7).value, 119);
});

test('shared-l2-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l2-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l2-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l1-01","shared-l1-02","shared-l1-04","shared-l1-06"]);
});
