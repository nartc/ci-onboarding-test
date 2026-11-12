// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-data-02/index.js';

test('reporting-data-02: dependency-derived value', () => {
  assert.equal(weight, 3636);
  assert.deepEqual(evaluate(7), { project: 'reporting-data-02', value: 3643, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-02","analytics-util-03"] });
});

test('reporting-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3637);
  assert.equal(evaluate(-7).value, 3629);
});

test('reporting-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-02","analytics-util-03"]);
});
