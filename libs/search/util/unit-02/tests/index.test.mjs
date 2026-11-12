// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-util-02/index.js';

test('search-util-02: dependency-derived value', () => {
  assert.equal(weight, 516);
  assert.deepEqual(evaluate(7), { project: 'search-util-02', value: 523, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"] });
});

test('search-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 517);
  assert.equal(evaluate(-7).value, 509);
});

test('search-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"]);
});
