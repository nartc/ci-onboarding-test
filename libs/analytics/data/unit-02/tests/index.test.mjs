// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-data-02/index.js';

test('analytics-data-02: dependency-derived value', () => {
  assert.equal(weight, 3657);
  assert.deepEqual(evaluate(7), { project: 'analytics-data-02', value: 3664, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-02","search-util-03"] });
});

test('analytics-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3658);
  assert.equal(evaluate(-7).value, 3650);
});

test('analytics-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-02","search-util-03"]);
});
