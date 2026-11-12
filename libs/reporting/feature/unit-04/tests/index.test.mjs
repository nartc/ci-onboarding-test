// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-feature-04/index.js';

test('reporting-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22376);
  assert.deepEqual(evaluate(7), { project: 'reporting-feature-04', value: 22383, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-04","analytics-data-01"] });
});

test('reporting-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22377);
  assert.equal(evaluate(-7).value, 22369);
});

test('reporting-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-04","analytics-data-01"]);
});
