// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-data-02/index.js';

test('search-data-02: dependency-derived value', () => {
  assert.equal(weight, 3638);
  assert.deepEqual(evaluate(7), { project: 'search-data-02', value: 3645, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-02","notifications-util-03"] });
});

test('search-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3639);
  assert.equal(evaluate(-7).value, 3631);
});

test('search-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-02","notifications-util-03"]);
});
