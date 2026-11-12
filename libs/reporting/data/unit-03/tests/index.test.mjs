// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-data-03/index.js';

test('reporting-data-03: dependency-derived value', () => {
  assert.equal(weight, 3636);
  assert.deepEqual(evaluate(7), { project: 'reporting-data-03', value: 3643, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-03","analytics-util-04"] });
});

test('reporting-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3637);
  assert.equal(evaluate(-7).value, 3629);
});

test('reporting-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","reporting-util-01","reporting-util-02","reporting-util-03","reporting-util-04","analytics-util-03","analytics-util-04"]);
});
