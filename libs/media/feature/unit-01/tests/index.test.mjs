// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-feature-01/index.js';

test('media-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22387);
  assert.deepEqual(evaluate(7), { project: 'media-feature-01', value: 22394, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-data-01","media-data-02","media-data-03","media-data-04","content-data-01","content-data-02"] });
});

test('media-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22388);
  assert.equal(evaluate(-7).value, 22380);
});

test('media-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-data-01","media-data-02","media-data-03","media-data-04","content-data-01","content-data-02"]);
});
