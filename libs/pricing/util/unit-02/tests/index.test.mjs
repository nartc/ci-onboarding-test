// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-util-02/index.js';

test('pricing-util-02: dependency-derived value', () => {
  assert.equal(weight, 514);
  assert.deepEqual(evaluate(7), { project: 'pricing-util-02', value: 521, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"] });
});

test('pricing-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 515);
  assert.equal(evaluate(-7).value, 507);
});

test('pricing-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"]);
});
