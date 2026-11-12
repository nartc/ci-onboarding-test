// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-util-04/index.js';

test('pricing-util-04: dependency-derived value', () => {
  assert.equal(weight, 524);
  assert.deepEqual(evaluate(7), { project: 'pricing-util-04', value: 531, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('pricing-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 525);
  assert.equal(evaluate(-7).value, 517);
});

test('pricing-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
