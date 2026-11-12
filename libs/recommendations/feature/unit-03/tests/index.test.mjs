// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-feature-03/index.js';

test('recommendations-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22249);
  assert.deepEqual(evaluate(7), { project: 'recommendations-feature-03', value: 22256, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-03","media-data-04"] });
});

test('recommendations-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22250);
  assert.equal(evaluate(-7).value, 22242);
});

test('recommendations-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-03","media-data-04"]);
});
