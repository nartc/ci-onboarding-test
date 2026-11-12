// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-util-02/index.js';

test('content-util-02: dependency-derived value', () => {
  assert.equal(weight, 524);
  assert.deepEqual(evaluate(7), { project: 'content-util-02', value: 531, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"] });
});

test('content-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 525);
  assert.equal(evaluate(-7).value, 517);
});

test('content-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"]);
});
