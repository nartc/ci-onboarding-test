// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/analytics-util-02/index.js';

test('analytics-util-02: dependency-derived value', () => {
  assert.equal(weight, 525);
  assert.deepEqual(evaluate(7), { project: 'analytics-util-02', value: 532, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('analytics-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 526);
  assert.equal(evaluate(-7).value, 518);
});

test('analytics-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('analytics-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'analytics-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
