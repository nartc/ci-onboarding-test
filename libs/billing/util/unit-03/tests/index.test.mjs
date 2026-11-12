// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-util-03/index.js';

test('billing-util-03: dependency-derived value', () => {
  assert.equal(weight, 514);
  assert.deepEqual(evaluate(7), { project: 'billing-util-03', value: 521, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('billing-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 515);
  assert.equal(evaluate(-7).value, 507);
});

test('billing-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
