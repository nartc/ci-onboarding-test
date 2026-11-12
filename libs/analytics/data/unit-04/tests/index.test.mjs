// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-data-04/index.js';

test('analytics-data-04: dependency-derived value', () => {
  assert.equal(weight, 3674);
  assert.deepEqual(evaluate(7), { project: 'analytics-data-04', value: 3681, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-04","search-util-01"] });
});

test('analytics-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3675);
  assert.equal(evaluate(-7).value, 3667);
});

test('analytics-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-04","search-util-01"]);
});
