// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/search-ui-01/index.js';

test('search-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134178);
  assert.deepEqual(evaluate(7), { project: 'search-ui-01', value: 134185, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-01","notifications-feature-02"] });
});

test('search-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134179);
  assert.equal(evaluate(-7).value, 134171);
});

test('search-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-feature-01","search-feature-02","search-feature-03","search-feature-04","notifications-feature-01","notifications-feature-02"]);
});
