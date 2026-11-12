// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-util-02/index.js';

test('observability-util-02: dependency-derived value', () => {
  assert.equal(weight, 522);
  assert.deepEqual(evaluate(7), { project: 'observability-util-02', value: 529, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"] });
});

test('observability-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 523);
  assert.equal(evaluate(-7).value, 515);
});

test('observability-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"]);
});
