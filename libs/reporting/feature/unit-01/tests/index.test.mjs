// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-feature-01/index.js';

test('reporting-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22353);
  assert.deepEqual(evaluate(7), { project: 'reporting-feature-01', value: 22360, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-01","analytics-data-02"] });
});

test('reporting-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22354);
  assert.equal(evaluate(-7).value, 22346);
});

test('reporting-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-01","analytics-data-02"]);
});
