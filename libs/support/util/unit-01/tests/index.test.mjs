// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/support-util-01/index.js';

test('support-util-01: dependency-derived value', () => {
  assert.equal(weight, 518);
  assert.deepEqual(evaluate(7), { project: 'support-util-01', value: 525, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('support-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 519);
  assert.equal(evaluate(-7).value, 511);
});

test('support-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('support-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'support-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
