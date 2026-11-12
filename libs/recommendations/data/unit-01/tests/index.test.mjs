// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-data-01/index.js';

test('recommendations-data-01: dependency-derived value', () => {
  assert.equal(weight, 3615);
  assert.deepEqual(evaluate(7), { project: 'recommendations-data-01', value: 3622, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-01","media-util-02"] });
});

test('recommendations-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3616);
  assert.equal(evaluate(-7).value, 3608);
});

test('recommendations-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-01","media-util-02"]);
});
