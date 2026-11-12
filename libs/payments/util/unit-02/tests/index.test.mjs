// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-util-02/index.js';

test('payments-util-02: dependency-derived value', () => {
  assert.equal(weight, 509);
  assert.deepEqual(evaluate(7), { project: 'payments-util-02', value: 516, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"] });
});

test('payments-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 510);
  assert.equal(evaluate(-7).value, 502);
});

test('payments-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"]);
});
