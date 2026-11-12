// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-feature-03/index.js';

test('media-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22390);
  assert.deepEqual(evaluate(7), { project: 'media-feature-03', value: 22397, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","media-data-01","media-data-02","media-data-03","media-data-04","content-data-03","content-data-04"] });
});

test('media-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22391);
  assert.equal(evaluate(-7).value, 22383);
});

test('media-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","media-data-01","media-data-02","media-data-03","media-data-04","content-data-03","content-data-04"]);
});
