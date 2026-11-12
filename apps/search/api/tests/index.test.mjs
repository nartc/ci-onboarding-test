// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/search-api/index.js';

test('search-api: dependency-derived value', () => {
  assert.equal(weight, 104322);
  assert.deepEqual(evaluate(7), { project: 'search-api', value: 104329, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-feature-01","search-feature-02","search-feature-03","search-feature-04","search-data-01","search-data-02","search-data-03","search-data-04"] });
});

test('search-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104323);
  assert.equal(evaluate(-7).value, 104315);
});

test('search-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-feature-01","search-feature-02","search-feature-03","search-feature-04","search-data-01","search-data-02","search-data-03","search-data-04"]);
});
