// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-feature-04/index.js';

test('marketing-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22287);
  assert.deepEqual(evaluate(7), { project: 'marketing-feature-04', value: 22294, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-04","support-data-01"] });
});

test('marketing-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22288);
  assert.equal(evaluate(-7).value, 22280);
});

test('marketing-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","marketing-data-01","marketing-data-02","marketing-data-03","marketing-data-04","support-data-04","support-data-01"]);
});
