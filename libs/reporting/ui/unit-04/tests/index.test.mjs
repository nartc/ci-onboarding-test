// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-ui-04/index.js';

test('reporting-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134918);
  assert.deepEqual(evaluate(7), { project: 'reporting-ui-04', value: 134925, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-04","analytics-feature-01"] });
});

test('reporting-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134919);
  assert.equal(evaluate(-7).value, 134911);
});

test('reporting-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-04","analytics-feature-01"]);
});
