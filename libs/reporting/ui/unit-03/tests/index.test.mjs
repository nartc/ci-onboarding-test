// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-ui-03/index.js';

test('reporting-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134919);
  assert.deepEqual(evaluate(7), { project: 'reporting-ui-03', value: 134926, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-03","analytics-feature-04"] });
});

test('reporting-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134920);
  assert.equal(evaluate(-7).value, 134912);
});

test('reporting-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","reporting-feature-01","reporting-feature-02","reporting-feature-03","reporting-feature-04","analytics-feature-03","analytics-feature-04"]);
});
