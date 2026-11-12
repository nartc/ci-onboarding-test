// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-feature-04/index.js';

test('search-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22296);
  assert.deepEqual(evaluate(7), { project: 'search-feature-04', value: 22303, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","search-data-01","search-data-02","search-data-03","search-data-04","notifications-data-04","notifications-data-01"] });
});

test('search-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22297);
  assert.equal(evaluate(-7).value, 22289);
});

test('search-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","search-data-01","search-data-02","search-data-03","search-data-04","notifications-data-04","notifications-data-01"]);
});
