// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-01/index.js';

test('shared-l1-01: dependency-derived value', () => {
  assert.equal(weight, 22);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-01', value: 29, dependencies: ["shared-l0-01","shared-l0-02","shared-l0-04","shared-l0-06"] });
});

test('shared-l1-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 23);
  assert.equal(evaluate(-7).value, 15);
});

test('shared-l1-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-01","shared-l0-02","shared-l0-04","shared-l0-06"]);
});
