// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-util-01/index.js';

test('recommendations-util-01: dependency-derived value', () => {
  assert.equal(weight, 510);
  assert.deepEqual(evaluate(7), { project: 'recommendations-util-01', value: 517, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"] });
});

test('recommendations-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 511);
  assert.equal(evaluate(-7).value, 503);
});

test('recommendations-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"]);
});
