// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-ui-02/index.js';

test('media-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134931);
  assert.deepEqual(evaluate(7), { project: 'media-ui-02', value: 134938, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-02","content-feature-03"] });
});

test('media-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134932);
  assert.equal(evaluate(-7).value, 134924);
});

test('media-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-02","content-feature-03"]);
});
