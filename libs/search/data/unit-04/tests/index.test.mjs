// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-data-04/index.js';

test('search-data-04: dependency-derived value', () => {
  assert.equal(weight, 3642);
  assert.deepEqual(evaluate(7), { project: 'search-data-04', value: 3649, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-04","notifications-util-01"] });
});

test('search-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3643);
  assert.equal(evaluate(-7).value, 3635);
});

test('search-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","search-util-01","search-util-02","search-util-03","search-util-04","notifications-util-04","notifications-util-01"]);
});
