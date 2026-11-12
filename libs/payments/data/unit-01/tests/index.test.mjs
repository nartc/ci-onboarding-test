// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-data-01/index.js';

test('payments-data-01: dependency-derived value', () => {
  assert.equal(weight, 3629);
  assert.deepEqual(evaluate(7), { project: 'payments-data-01', value: 3636, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-01","shipping-util-02"] });
});

test('payments-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3630);
  assert.equal(evaluate(-7).value, 3622);
});

test('payments-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-01","shipping-util-02"]);
});
