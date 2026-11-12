// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-ui-01/index.js';

test('media-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134938);
  assert.deepEqual(evaluate(7), { project: 'media-ui-01', value: 134945, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-01","content-feature-02"] });
});

test('media-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134939);
  assert.equal(evaluate(-7).value, 134931);
});

test('media-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-feature-01","media-feature-02","media-feature-03","media-feature-04","content-feature-01","content-feature-02"]);
});
