// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-data-03/index.js';

test('search-data-03: dependency-derived value', () => {
  assert.equal(weight, 3639);
  assert.deepEqual(evaluate(7), { project: 'search-data-03', value: 3646, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-03","notifications-util-04"] });
});

test('search-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3640);
  assert.equal(evaluate(-7).value, 3632);
});

test('search-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-03","notifications-util-04"]);
});
