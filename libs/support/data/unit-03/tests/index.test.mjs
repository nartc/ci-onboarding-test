// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-data-03/index.js';

test('support-data-03: dependency-derived value', () => {
  assert.equal(weight, 3616);
  assert.deepEqual(evaluate(7), { project: 'support-data-03', value: 3623, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","support-util-01","support-util-02","support-util-03","support-util-04","reporting-util-03","reporting-util-04"] });
});

test('support-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3617);
  assert.equal(evaluate(-7).value, 3609);
});

test('support-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","support-util-01","support-util-02","support-util-03","support-util-04","reporting-util-03","reporting-util-04"]);
});
