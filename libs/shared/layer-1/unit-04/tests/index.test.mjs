// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-04/index.js';

test('shared-l1-04: dependency-derived value', () => {
  assert.equal(weight, 29);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-04', value: 36, dependencies: ["shared-l0-04","shared-l0-05","shared-l0-07","shared-l0-01"] });
});

test('shared-l1-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 30);
  assert.equal(evaluate(-7).value, 22);
});

test('shared-l1-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-04","shared-l0-05","shared-l0-07","shared-l0-01"]);
});
