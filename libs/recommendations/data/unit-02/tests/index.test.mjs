// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-data-02/index.js';

test('recommendations-data-02: dependency-derived value', () => {
  assert.equal(weight, 3619);
  assert.deepEqual(evaluate(7), { project: 'recommendations-data-02', value: 3626, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-02","media-util-03"] });
});

test('recommendations-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3620);
  assert.equal(evaluate(-7).value, 3612);
});

test('recommendations-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-02","media-util-03"]);
});
