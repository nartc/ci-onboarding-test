// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-feature-01/index.js';

test('support-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22263);
  assert.deepEqual(evaluate(7), { project: 'support-feature-01', value: 22270, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-01","reporting-data-02"] });
});

test('support-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22264);
  assert.equal(evaluate(-7).value, 22256);
});

test('support-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-01","reporting-data-02"]);
});
