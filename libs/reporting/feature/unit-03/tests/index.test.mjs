// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-feature-03/index.js';

test('reporting-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22387);
  assert.deepEqual(evaluate(7), { project: 'reporting-feature-03', value: 22394, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-03","analytics-data-04"] });
});

test('reporting-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22388);
  assert.equal(evaluate(-7).value, 22380);
});

test('reporting-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-03","analytics-data-04"]);
});
