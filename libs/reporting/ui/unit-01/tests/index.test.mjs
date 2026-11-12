// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-ui-01/index.js';

test('reporting-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134914);
  assert.deepEqual(evaluate(7), { project: 'reporting-ui-01', value: 134921, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-01","analytics-feature-02"] });
});

test('reporting-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134915);
  assert.equal(evaluate(-7).value, 134907);
});

test('reporting-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-01","analytics-feature-02"]);
});
