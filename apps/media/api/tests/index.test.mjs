// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/media-api/index.js';

test('media-api: dependency-derived value', () => {
  assert.equal(weight, 104604);
  assert.deepEqual(evaluate(7), { project: 'media-api', value: 104611, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-feature-01","media-feature-02","media-feature-03","media-feature-04","media-data-01","media-data-02","media-data-03","media-data-04"] });
});

test('media-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104605);
  assert.equal(evaluate(-7).value, 104597);
});

test('media-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-feature-01","media-feature-02","media-feature-03","media-feature-04","media-data-01","media-data-02","media-data-03","media-data-04"]);
});
