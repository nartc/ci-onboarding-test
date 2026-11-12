// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-feature-01/index.js';

test('recommendations-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22220);
  assert.deepEqual(evaluate(7), { project: 'recommendations-feature-01', value: 22227, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-01","media-data-02"] });
});

test('recommendations-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22221);
  assert.equal(evaluate(-7).value, 22213);
});

test('recommendations-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-01","media-data-02"]);
});
