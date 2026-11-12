// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-util-03/index.js';

test('media-util-03: dependency-derived value', () => {
  assert.equal(weight, 519);
  assert.deepEqual(evaluate(7), { project: 'media-util-03', value: 526, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"] });
});

test('media-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 520);
  assert.equal(evaluate(-7).value, 512);
});

test('media-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"]);
});
