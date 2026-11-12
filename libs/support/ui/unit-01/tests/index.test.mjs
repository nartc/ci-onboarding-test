// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-ui-01/index.js';

test('support-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134310);
  assert.deepEqual(evaluate(7), { project: 'support-ui-01', value: 134317, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-01","reporting-feature-02"] });
});

test('support-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134311);
  assert.equal(evaluate(-7).value, 134303);
});

test('support-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-feature-01","support-feature-02","support-feature-03","support-feature-04","reporting-feature-01","reporting-feature-02"]);
});
