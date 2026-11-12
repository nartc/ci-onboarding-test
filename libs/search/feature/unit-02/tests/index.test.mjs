// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-feature-02/index.js';

test('search-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22310);
  assert.deepEqual(evaluate(7), { project: 'search-feature-02', value: 22317, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","search-data-01","search-data-02","search-data-03","search-data-04","notifications-data-02","notifications-data-03"] });
});

test('search-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22311);
  assert.equal(evaluate(-7).value, 22303);
});

test('search-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","search-data-01","search-data-02","search-data-03","search-data-04","notifications-data-02","notifications-data-03"]);
});
