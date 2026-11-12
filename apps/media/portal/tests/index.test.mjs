// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/media-portal/index.js';

test('media-portal: dependency-derived value', () => {
  assert.equal(weight, 899473);
  assert.deepEqual(evaluate(7), { project: 'media-portal', value: 899480, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-feature-01","media-feature-02","media-feature-03","media-feature-04","media-ui-01","media-ui-02","media-ui-03","media-ui-04","content-ui-01","content-ui-02"] });
});

test('media-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899474);
  assert.equal(evaluate(-7).value, 899466);
});

test('media-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-feature-01","media-feature-02","media-feature-03","media-feature-04","media-ui-01","media-ui-02","media-ui-03","media-ui-04","content-ui-01","content-ui-02"]);
});
