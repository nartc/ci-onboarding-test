// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-ui-04/index.js';

test('media-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134917);
  assert.deepEqual(evaluate(7), { project: 'media-ui-04', value: 134924, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-04","content-feature-01"] });
});

test('media-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134918);
  assert.equal(evaluate(-7).value, 134910);
});

test('media-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-04","content-feature-01"]);
});
