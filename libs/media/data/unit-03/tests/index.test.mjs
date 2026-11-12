// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-data-03/index.js';

test('media-data-03: dependency-derived value', () => {
  assert.equal(weight, 3645);
  assert.deepEqual(evaluate(7), { project: 'media-data-03', value: 3652, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","media-util-01","media-util-02","media-util-03","media-util-04","content-util-03","content-util-04"] });
});

test('media-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3646);
  assert.equal(evaluate(-7).value, 3638);
});

test('media-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","media-util-01","media-util-02","media-util-03","media-util-04","content-util-03","content-util-04"]);
});
