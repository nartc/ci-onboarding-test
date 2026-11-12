// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-ui-04/index.js';

test('payments-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134755);
  assert.deepEqual(evaluate(7), { project: 'payments-ui-04', value: 134762, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-04","shipping-feature-01"] });
});

test('payments-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134756);
  assert.equal(evaluate(-7).value, 134748);
});

test('payments-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-04","shipping-feature-01"]);
});
