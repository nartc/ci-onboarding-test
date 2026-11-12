// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-data-02/index.js';

test('support-data-02: dependency-derived value', () => {
  assert.equal(weight, 3627);
  assert.deepEqual(evaluate(7), { project: 'support-data-02', value: 3634, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","support-util-01","support-util-02","support-util-03","support-util-04","reporting-util-02","reporting-util-03"] });
});

test('support-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3628);
  assert.equal(evaluate(-7).value, 3620);
});

test('support-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","support-util-01","support-util-02","support-util-03","support-util-04","reporting-util-02","reporting-util-03"]);
});
