// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-data-01/index.js';

test('search-data-01: dependency-derived value', () => {
  assert.equal(weight, 3648);
  assert.deepEqual(evaluate(7), { project: 'search-data-01', value: 3655, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-01","notifications-util-02"] });
});

test('search-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3649);
  assert.equal(evaluate(-7).value, 3641);
});

test('search-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-01","notifications-util-02"]);
});
