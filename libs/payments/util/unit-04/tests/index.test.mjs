// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-util-04/index.js';

test('payments-util-04: dependency-derived value', () => {
  assert.equal(weight, 510);
  assert.deepEqual(evaluate(7), { project: 'payments-util-04', value: 517, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"] });
});

test('payments-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 511);
  assert.equal(evaluate(-7).value, 503);
});

test('payments-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"]);
});
