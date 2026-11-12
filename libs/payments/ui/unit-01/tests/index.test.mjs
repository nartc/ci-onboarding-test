// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-ui-01/index.js';

test('payments-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134759);
  assert.deepEqual(evaluate(7), { project: 'payments-ui-01', value: 134766, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-01","shipping-feature-02"] });
});

test('payments-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134760);
  assert.equal(evaluate(-7).value, 134752);
});

test('payments-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-01","shipping-feature-02"]);
});
