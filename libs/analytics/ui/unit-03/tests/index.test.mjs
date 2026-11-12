// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-ui-03/index.js';

test('analytics-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134945);
  assert.deepEqual(evaluate(7), { project: 'analytics-ui-03', value: 134952, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-03","search-feature-04"] });
});

test('analytics-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134946);
  assert.equal(evaluate(-7).value, 134938);
});

test('analytics-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-03","search-feature-04"]);
});
