// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-ui-01/index.js';

test('analytics-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134973);
  assert.deepEqual(evaluate(7), { project: 'analytics-ui-01', value: 134980, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-01","search-feature-02"] });
});

test('analytics-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134974);
  assert.equal(evaluate(-7).value, 134966);
});

test('analytics-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-01","search-feature-02"]);
});
