// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/payments-portal/index.js';

test('payments-portal: dependency-derived value', () => {
  assert.equal(weight, 898999);
  assert.deepEqual(evaluate(7), { project: 'payments-portal', value: 899006, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","payments-ui-01","payments-ui-02","payments-ui-03","payments-ui-04","shipping-ui-01","shipping-ui-02"] });
});

test('payments-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899000);
  assert.equal(evaluate(-7).value, 898992);
});

test('payments-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","payments-ui-01","payments-ui-02","payments-ui-03","payments-ui-04","shipping-ui-01","shipping-ui-02"]);
});
