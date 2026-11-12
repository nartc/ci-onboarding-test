// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-ui-02/index.js';

test('reporting-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134906);
  assert.deepEqual(evaluate(7), { project: 'reporting-ui-02', value: 134913, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-02","analytics-feature-03"] });
});

test('reporting-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134907);
  assert.equal(evaluate(-7).value, 134899);
});

test('reporting-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-02","analytics-feature-03"]);
});
