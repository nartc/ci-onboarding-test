// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-ui-02/index.js';

test('payments-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134752);
  assert.deepEqual(evaluate(7), { project: 'payments-ui-02', value: 134759, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-02","shipping-feature-03"] });
});

test('payments-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134753);
  assert.equal(evaluate(-7).value, 134745);
});

test('payments-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-02","shipping-feature-03"]);
});
