// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-util-02/index.js';

test('recommendations-util-02: dependency-derived value', () => {
  assert.equal(weight, 522);
  assert.deepEqual(evaluate(7), { project: 'recommendations-util-02', value: 529, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"] });
});

test('recommendations-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 523);
  assert.equal(evaluate(-7).value, 515);
});

test('recommendations-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"]);
});
