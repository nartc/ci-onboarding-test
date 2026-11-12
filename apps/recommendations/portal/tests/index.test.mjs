// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/recommendations-portal/index.js';

test('recommendations-portal: dependency-derived value', () => {
  assert.equal(weight, 896308);
  assert.deepEqual(evaluate(7), { project: 'recommendations-portal', value: 896315, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","recommendations-ui-01","recommendations-ui-02","recommendations-ui-03","recommendations-ui-04","media-ui-01","media-ui-02"] });
});

test('recommendations-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 896309);
  assert.equal(evaluate(-7).value, 896301);
});

test('recommendations-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","recommendations-ui-01","recommendations-ui-02","recommendations-ui-03","recommendations-ui-04","media-ui-01","media-ui-02"]);
});
