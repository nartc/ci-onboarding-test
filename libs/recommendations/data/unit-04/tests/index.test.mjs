// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-data-04/index.js';

test('recommendations-data-04: dependency-derived value', () => {
  assert.equal(weight, 3606);
  assert.deepEqual(evaluate(7), { project: 'recommendations-data-04', value: 3613, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-04","media-util-01"] });
});

test('recommendations-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3607);
  assert.equal(evaluate(-7).value, 3599);
});

test('recommendations-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-04","media-util-01"]);
});
