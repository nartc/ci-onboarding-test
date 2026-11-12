// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/shared-l2-06/index.js';

test('shared-l2-06: dependency-derived value', () => {
  assert.equal(weight, 126);
  assert.deepEqual(evaluate(7), { project: 'shared-l2-06', value: 133, dependencies: ["shared-l1-06","shared-l1-07","shared-l1-01","shared-l1-03"] });
});

test('shared-l2-06: default and negative seeds', () => {
  assert.equal(evaluate().value, 127);
  assert.equal(evaluate(-7).value, 119);
});

test('shared-l2-06: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('shared-l2-06: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'shared-l2-06');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l1-06","shared-l1-07","shared-l1-01","shared-l1-03"]);
});
