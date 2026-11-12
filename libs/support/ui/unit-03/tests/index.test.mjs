// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-ui-03/index.js';

test('support-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134350);
  assert.deepEqual(evaluate(7), { project: 'support-ui-03', value: 134357, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-03","reporting-feature-04"] });
});

test('support-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134351);
  assert.equal(evaluate(-7).value, 134343);
});

test('support-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-03","reporting-feature-04"]);
});
