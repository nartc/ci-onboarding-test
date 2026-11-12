// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/support-portal/index.js';

test('support-portal: dependency-derived value', () => {
  assert.equal(weight, 896726);
  assert.deepEqual(evaluate(7), { project: 'support-portal', value: 896733, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-feature-01","support-feature-02","support-feature-03","support-feature-04","support-ui-01","support-ui-02","support-ui-03","support-ui-04","reporting-ui-01","reporting-ui-02"] });
});

test('support-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 896727);
  assert.equal(evaluate(-7).value, 896719);
});

test('support-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-feature-01","support-feature-02","support-feature-03","support-feature-04","support-ui-01","support-ui-02","support-ui-03","support-ui-04","reporting-ui-01","reporting-ui-02"]);
});
