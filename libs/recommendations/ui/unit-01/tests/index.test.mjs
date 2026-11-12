// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-ui-01/index.js';

test('recommendations-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134228);
  assert.deepEqual(evaluate(7), { project: 'recommendations-ui-01', value: 134235, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-01","media-feature-02"] });
});

test('recommendations-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134229);
  assert.equal(evaluate(-7).value, 134221);
});

test('recommendations-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-01","media-feature-02"]);
});
