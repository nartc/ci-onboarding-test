// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/analytics-portal/index.js';

test('analytics-portal: dependency-derived value', () => {
  assert.equal(weight, 898508);
  assert.deepEqual(evaluate(7), { project: 'analytics-portal', value: 898515, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","analytics-ui-01","analytics-ui-02","analytics-ui-03","analytics-ui-04","search-ui-01","search-ui-02"] });
});

test('analytics-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 898509);
  assert.equal(evaluate(-7).value, 898501);
});

test('analytics-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","analytics-ui-01","analytics-ui-02","analytics-ui-03","analytics-ui-04","search-ui-01","search-ui-02"]);
});
