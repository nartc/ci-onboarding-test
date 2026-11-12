// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-feature-04/index.js';

test('recommendations-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22242);
  assert.deepEqual(evaluate(7), { project: 'recommendations-feature-04', value: 22249, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-04","media-data-01"] });
});

test('recommendations-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22243);
  assert.equal(evaluate(-7).value, 22235);
});

test('recommendations-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-04","media-data-01"]);
});
