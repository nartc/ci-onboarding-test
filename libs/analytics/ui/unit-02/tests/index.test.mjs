// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-ui-02/index.js';

test('analytics-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134955);
  assert.deepEqual(evaluate(7), { project: 'analytics-ui-02', value: 134962, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-02","search-feature-03"] });
});

test('analytics-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134956);
  assert.equal(evaluate(-7).value, 134948);
});

test('analytics-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","search-feature-02","search-feature-03"]);
});
