// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-util-01/index.js';

test('payments-util-01: dependency-derived value', () => {
  assert.equal(weight, 512);
  assert.deepEqual(evaluate(7), { project: 'payments-util-01', value: 519, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"] });
});

test('payments-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 513);
  assert.equal(evaluate(-7).value, 505);
});

test('payments-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"]);
});
