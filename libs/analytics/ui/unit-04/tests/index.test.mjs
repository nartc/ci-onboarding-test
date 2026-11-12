// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-ui-04/index.js';

test('analytics-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134967);
  assert.deepEqual(evaluate(7), { project: 'analytics-ui-04', value: 134974, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-04","search-feature-01"] });
});

test('analytics-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134968);
  assert.equal(evaluate(-7).value, 134960);
});

test('analytics-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-04","search-feature-01"]);
});
