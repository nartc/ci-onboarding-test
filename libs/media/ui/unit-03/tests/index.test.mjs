// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-ui-03/index.js';

test('media-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134924);
  assert.deepEqual(evaluate(7), { project: 'media-ui-03', value: 134931, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-03","content-feature-04"] });
});

test('media-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134925);
  assert.equal(evaluate(-7).value, 134917);
});

test('media-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-03","content-feature-04"]);
});
