// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-data-04/index.js';

test('payments-data-04: dependency-derived value', () => {
  assert.equal(weight, 3619);
  assert.deepEqual(evaluate(7), { project: 'payments-data-04', value: 3626, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-04","shipping-util-01"] });
});

test('payments-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3620);
  assert.equal(evaluate(-7).value, 3612);
});

test('payments-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-04","shipping-util-01"]);
});
