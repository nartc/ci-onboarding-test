// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-util-03/index.js';

test('search-util-03: dependency-derived value', () => {
  assert.equal(weight, 522);
  assert.deepEqual(evaluate(7), { project: 'search-util-03', value: 529, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('search-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 523);
  assert.equal(evaluate(-7).value, 515);
});

test('search-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
