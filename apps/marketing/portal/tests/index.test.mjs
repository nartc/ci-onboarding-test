// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/marketing-portal/index.js';

test('marketing-portal: dependency-derived value', () => {
  assert.equal(weight, 895211);
  assert.deepEqual(evaluate(7), { project: 'marketing-portal', value: 895218, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","marketing-ui-01","marketing-ui-02","marketing-ui-03","marketing-ui-04","support-ui-01","support-ui-02"] });
});

test('marketing-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 895212);
  assert.equal(evaluate(-7).value, 895204);
});

test('marketing-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","marketing-ui-01","marketing-ui-02","marketing-ui-03","marketing-ui-04","support-ui-01","support-ui-02"]);
});
