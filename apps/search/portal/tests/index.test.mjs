// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/search-portal/index.js';

test('search-portal: dependency-derived value', () => {
  assert.equal(weight, 894446);
  assert.deepEqual(evaluate(7), { project: 'search-portal', value: 894453, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-feature-01","search-feature-02","search-feature-03","search-feature-04","search-ui-01","search-ui-02","search-ui-03","search-ui-04","notifications-ui-01","notifications-ui-02"] });
});

test('search-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 894447);
  assert.equal(evaluate(-7).value, 894439);
});

test('search-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('search-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'search-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","search-feature-01","search-feature-02","search-feature-03","search-feature-04","search-ui-01","search-ui-02","search-ui-03","search-ui-04","notifications-ui-01","notifications-ui-02"]);
});
