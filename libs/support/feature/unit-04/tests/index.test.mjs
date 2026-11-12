// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-feature-04/index.js';

test('support-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22257);
  assert.deepEqual(evaluate(7), { project: 'support-feature-04', value: 22264, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-04","reporting-data-01"] });
});

test('support-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22258);
  assert.equal(evaluate(-7).value, 22250);
});

test('support-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","support-data-01","support-data-02","support-data-03","support-data-04","reporting-data-04","reporting-data-01"]);
});
