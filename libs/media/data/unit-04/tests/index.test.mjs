// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-data-04/index.js';

test('media-data-04: dependency-derived value', () => {
  assert.equal(weight, 3639);
  assert.deepEqual(evaluate(7), { project: 'media-data-04', value: 3646, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","media-util-01","media-util-02","media-util-03","media-util-04","content-util-04","content-util-01"] });
});

test('media-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3640);
  assert.equal(evaluate(-7).value, 3632);
});

test('media-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","media-util-01","media-util-02","media-util-03","media-util-04","content-util-04","content-util-01"]);
});
