// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-ui-02/index.js';

test('marketing-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134235);
  assert.deepEqual(evaluate(7), { project: 'marketing-ui-02', value: 134242, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","support-feature-02","support-feature-03"] });
});

test('marketing-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134236);
  assert.equal(evaluate(-7).value, 134228);
});

test('marketing-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","marketing-feature-01","marketing-feature-02","marketing-feature-03","marketing-feature-04","support-feature-02","support-feature-03"]);
});
