// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-data-03/index.js';

test('analytics-data-03: dependency-derived value', () => {
  assert.equal(weight, 3671);
  assert.deepEqual(evaluate(7), { project: 'analytics-data-03', value: 3678, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-03","search-util-04"] });
});

test('analytics-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3672);
  assert.equal(evaluate(-7).value, 3664);
});

test('analytics-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","analytics-util-01","analytics-util-02","analytics-util-03","analytics-util-04","search-util-03","search-util-04"]);
});
