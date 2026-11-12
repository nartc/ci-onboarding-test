// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-ui-04/index.js';

test('support-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134314);
  assert.deepEqual(evaluate(7), { project: 'support-ui-04', value: 134321, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-04","reporting-feature-01"] });
});

test('support-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134315);
  assert.equal(evaluate(-7).value, 134307);
});

test('support-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-04","reporting-feature-01"]);
});
