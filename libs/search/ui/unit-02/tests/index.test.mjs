// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-ui-02/index.js';

test('search-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134162);
  assert.deepEqual(evaluate(7), { project: 'search-ui-02', value: 134169, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-02","notifications-feature-03"] });
});

test('search-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134163);
  assert.equal(evaluate(-7).value, 134155);
});

test('search-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-02","notifications-feature-03"]);
});
