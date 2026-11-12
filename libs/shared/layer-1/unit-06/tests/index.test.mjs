// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l1-06/index.js';

test('shared-l1-06: dependency-derived value', () => {
  assert.equal(weight, 31);
  assert.deepEqual(evaluate(7), { project: 'shared-l1-06', value: 38, dependencies: ["shared-l0-06","shared-l0-07","shared-l0-01","shared-l0-03"] });
});

test('shared-l1-06: default and negative seeds', () => {
  assert.equal(evaluate().value, 32);
  assert.equal(evaluate(-7).value, 24);
});

test('shared-l1-06: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l1-06: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l1-06');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l0-06","shared-l0-07","shared-l0-01","shared-l0-03"]);
});
