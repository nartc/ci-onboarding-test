// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-data-02/index.js';

test('payments-data-02: dependency-derived value', () => {
  assert.equal(weight, 3621);
  assert.deepEqual(evaluate(7), { project: 'payments-data-02', value: 3628, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-02","shipping-util-03"] });
});

test('payments-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3622);
  assert.equal(evaluate(-7).value, 3614);
});

test('payments-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-02","shipping-util-03"]);
});
