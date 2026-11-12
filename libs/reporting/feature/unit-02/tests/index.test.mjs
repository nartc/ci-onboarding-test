// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-feature-02/index.js';

test('reporting-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22372);
  assert.deepEqual(evaluate(7), { project: 'reporting-feature-02', value: 22379, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-02","analytics-data-03"] });
});

test('reporting-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22373);
  assert.equal(evaluate(-7).value, 22365);
});

test('reporting-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","reporting-data-01","reporting-data-02","reporting-data-03","reporting-data-04","analytics-data-02","analytics-data-03"]);
});
