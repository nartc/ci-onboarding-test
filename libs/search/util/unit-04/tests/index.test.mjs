// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-util-04/index.js';

test('search-util-04: dependency-derived value', () => {
  assert.equal(weight, 526);
  assert.deepEqual(evaluate(7), { project: 'search-util-04', value: 533, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('search-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 527);
  assert.equal(evaluate(-7).value, 519);
});

test('search-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
