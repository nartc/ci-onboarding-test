// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-util-04/index.js';

test('media-util-04: dependency-derived value', () => {
  assert.equal(weight, 508);
  assert.deepEqual(evaluate(7), { project: 'media-util-04', value: 515, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"] });
});

test('media-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 509);
  assert.equal(evaluate(-7).value, 501);
});

test('media-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"]);
});
