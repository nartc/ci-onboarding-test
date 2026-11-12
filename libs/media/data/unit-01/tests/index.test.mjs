// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/media-data-01/index.js';

test('media-data-01: dependency-derived value', () => {
  assert.equal(weight, 3632);
  assert.deepEqual(evaluate(7), { project: 'media-data-01', value: 3639, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-util-01","media-util-02","media-util-03","media-util-04","content-util-01","content-util-02"] });
});

test('media-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3633);
  assert.equal(evaluate(-7).value, 3625);
});

test('media-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('media-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'media-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","media-util-01","media-util-02","media-util-03","media-util-04","content-util-01","content-util-02"]);
});
