// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-feature-02/index.js';

test('support-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22275);
  assert.deepEqual(evaluate(7), { project: 'support-feature-02', value: 22282, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-02","reporting-data-03"] });
});

test('support-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22276);
  assert.equal(evaluate(-7).value, 22268);
});

test('support-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-02","reporting-data-03"]);
});
