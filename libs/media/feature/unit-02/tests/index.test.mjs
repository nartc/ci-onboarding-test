// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-feature-02/index.js';

test('media-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22376);
  assert.deepEqual(evaluate(7), { project: 'media-feature-02', value: 22383, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","media-data-01","media-data-02","media-data-03","media-data-04","content-data-02","content-data-03"] });
});

test('media-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22377);
  assert.equal(evaluate(-7).value, 22369);
});

test('media-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","media-data-01","media-data-02","media-data-03","media-data-04","content-data-02","content-data-03"]);
});
