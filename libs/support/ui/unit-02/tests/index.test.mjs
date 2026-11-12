// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-ui-02/index.js';

test('support-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134342);
  assert.deepEqual(evaluate(7), { project: 'support-ui-02', value: 134349, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-02","reporting-feature-03"] });
});

test('support-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134343);
  assert.equal(evaluate(-7).value, 134335);
});

test('support-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-02","reporting-feature-03"]);
});
