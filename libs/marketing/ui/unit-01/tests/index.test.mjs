// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-ui-01/index.js';

test('marketing-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134221);
  assert.deepEqual(evaluate(7), { project: 'marketing-ui-01', value: 134228, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","support-feature-01","support-feature-02"] });
});

test('marketing-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134222);
  assert.equal(evaluate(-7).value, 134214);
});

test('marketing-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","support-feature-01","support-feature-02"]);
});
