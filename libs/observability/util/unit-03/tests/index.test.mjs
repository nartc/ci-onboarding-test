// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-util-03/index.js';

test('observability-util-03: dependency-derived value', () => {
  assert.equal(weight, 519);
  assert.deepEqual(evaluate(7), { project: 'observability-util-03', value: 526, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"] });
});

test('observability-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 520);
  assert.equal(evaluate(-7).value, 512);
});

test('observability-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"]);
});
