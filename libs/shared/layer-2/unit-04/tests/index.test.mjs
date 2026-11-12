// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l2-04/index.js';

test('shared-l2-04: dependency-derived value', () => {
  assert.equal(weight, 124);
  assert.deepEqual(evaluate(7), { project: 'shared-l2-04', value: 131, dependencies: ["shared-l1-04","shared-l1-05","shared-l1-07","shared-l1-01"] });
});

test('shared-l2-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 125);
  assert.equal(evaluate(-7).value, 117);
});

test('shared-l2-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l2-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l2-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l1-04","shared-l1-05","shared-l1-07","shared-l1-01"]);
});
