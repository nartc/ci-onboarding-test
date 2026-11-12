// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/analytics-api/index.js';

test('analytics-api: dependency-derived value', () => {
  assert.equal(weight, 104985);
  assert.deepEqual(evaluate(7), { project: 'analytics-api', value: 104992, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04"] });
});

test('analytics-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104986);
  assert.equal(evaluate(-7).value, 104978);
});

test('analytics-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","analytics-feature-01","analytics-feature-02","analytics-feature-03","analytics-feature-04","analytics-data-01","analytics-data-02","analytics-data-03","analytics-data-04"]);
});
