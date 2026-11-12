// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-data-04/index.js';

test('support-data-04: dependency-derived value', () => {
  assert.equal(weight, 3612);
  assert.deepEqual(evaluate(7), { project: 'support-data-04', value: 3619, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","support-util-01","support-util-02","support-util-03","support-util-04","reporting-util-04","reporting-util-01"] });
});

test('support-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3613);
  assert.equal(evaluate(-7).value, 3605);
});

test('support-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","support-util-01","support-util-02","support-util-03","support-util-04","reporting-util-04","reporting-util-01"]);
});
