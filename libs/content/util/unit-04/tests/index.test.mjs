// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/content-util-04/index.js';

test('content-util-04: dependency-derived value', () => {
  assert.equal(weight, 533);
  assert.deepEqual(evaluate(7), { project: 'content-util-04', value: 540, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"] });
});

test('content-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 534);
  assert.equal(evaluate(-7).value, 526);
});

test('content-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('content-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'content-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"]);
});
