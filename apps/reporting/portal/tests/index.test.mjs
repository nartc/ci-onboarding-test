// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/reporting-portal/index.js';

test('reporting-portal: dependency-derived value', () => {
  assert.equal(weight, 899590);
  assert.deepEqual(evaluate(7), { project: 'reporting-portal', value: 899597, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","reporting-ui-01","reporting-ui-02","reporting-ui-03","reporting-ui-04","analytics-ui-01","analytics-ui-02"] });
});

test('reporting-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899591);
  assert.equal(evaluate(-7).value, 899583);
});

test('reporting-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","reporting-ui-01","reporting-ui-02","reporting-ui-03","reporting-ui-04","analytics-ui-01","analytics-ui-02"]);
});
