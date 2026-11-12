// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-data-01/index.js';

test('reporting-data-01: dependency-derived value', () => {
  assert.equal(weight, 3622);
  assert.deepEqual(evaluate(7), { project: 'reporting-data-01', value: 3629, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-01","analytics-util-02"] });
});

test('reporting-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3623);
  assert.equal(evaluate(-7).value, 3615);
});

test('reporting-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-01","analytics-util-02"]);
});
