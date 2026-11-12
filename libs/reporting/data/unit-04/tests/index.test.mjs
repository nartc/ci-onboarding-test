// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-data-04/index.js';

test('reporting-data-04: dependency-derived value', () => {
  assert.equal(weight, 3630);
  assert.deepEqual(evaluate(7), { project: 'reporting-data-04', value: 3637, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-04","analytics-util-01"] });
});

test('reporting-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3631);
  assert.equal(evaluate(-7).value, 3623);
});

test('reporting-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-04","analytics-util-01"]);
});
