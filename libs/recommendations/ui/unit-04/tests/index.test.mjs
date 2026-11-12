// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-ui-04/index.js';

test('recommendations-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134246);
  assert.deepEqual(evaluate(7), { project: 'recommendations-ui-04', value: 134253, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-04","media-feature-01"] });
});

test('recommendations-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134247);
  assert.equal(evaluate(-7).value, 134239);
});

test('recommendations-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-04","media-feature-01"]);
});
