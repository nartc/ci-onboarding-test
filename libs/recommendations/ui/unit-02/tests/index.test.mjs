// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-ui-02/index.js';

test('recommendations-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134243);
  assert.deepEqual(evaluate(7), { project: 'recommendations-ui-02', value: 134250, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-02","media-feature-03"] });
});

test('recommendations-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134244);
  assert.equal(evaluate(-7).value, 134236);
});

test('recommendations-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-02","media-feature-03"]);
});
