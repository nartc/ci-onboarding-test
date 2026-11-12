// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-util-01/index.js';

test('search-util-01: dependency-derived value', () => {
  assert.equal(weight, 527);
  assert.deepEqual(evaluate(7), { project: 'search-util-01', value: 534, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"] });
});

test('search-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 528);
  assert.equal(evaluate(-7).value, 520);
});

test('search-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"]);
});
