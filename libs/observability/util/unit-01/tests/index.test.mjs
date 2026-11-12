// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-util-01/index.js';

test('observability-util-01: dependency-derived value', () => {
  assert.equal(weight, 524);
  assert.deepEqual(evaluate(7), { project: 'observability-util-01', value: 531, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"] });
});

test('observability-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 525);
  assert.equal(evaluate(-7).value, 517);
});

test('observability-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"]);
});
