// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/experimentation-util-02/index.js';

test('experimentation-util-02: dependency-derived value', () => {
  assert.equal(weight, 522);
  assert.deepEqual(evaluate(7), { project: 'experimentation-util-02', value: 529, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"] });
});

test('experimentation-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 523);
  assert.equal(evaluate(-7).value, 515);
});

test('experimentation-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('experimentation-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'experimentation-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"]);
});
