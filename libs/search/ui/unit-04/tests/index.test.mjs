// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-ui-04/index.js';

test('search-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134174);
  assert.deepEqual(evaluate(7), { project: 'search-ui-04', value: 134181, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-04","notifications-feature-01"] });
});

test('search-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134175);
  assert.equal(evaluate(-7).value, 134167);
});

test('search-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-04","notifications-feature-01"]);
});
