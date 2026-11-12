// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-ui-04/index.js';

test('marketing-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134202);
  assert.deepEqual(evaluate(7), { project: 'marketing-ui-04', value: 134209, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","support-feature-04","support-feature-01"] });
});

test('marketing-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134203);
  assert.equal(evaluate(-7).value, 134195);
});

test('marketing-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","support-feature-04","support-feature-01"]);
});
