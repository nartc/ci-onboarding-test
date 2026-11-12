// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-feature-02/index.js';

test('recommendations-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22245);
  assert.deepEqual(evaluate(7), { project: 'recommendations-feature-02', value: 22252, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-02","media-data-03"] });
});

test('recommendations-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22246);
  assert.equal(evaluate(-7).value, 22238);
});

test('recommendations-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","recommendations-data-01","recommendations-data-02","recommendations-data-03","recommendations-data-04","media-data-02","media-data-03"]);
});
