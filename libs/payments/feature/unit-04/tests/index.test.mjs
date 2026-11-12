// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-feature-04/index.js';

test('payments-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22337);
  assert.deepEqual(evaluate(7), { project: 'payments-feature-04', value: 22344, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","payments-data-01","payments-data-02","payments-data-03","payments-data-04","shipping-data-04","shipping-data-01"] });
});

test('payments-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22338);
  assert.equal(evaluate(-7).value, 22330);
});

test('payments-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","payments-data-01","payments-data-02","payments-data-03","payments-data-04","shipping-data-04","shipping-data-01"]);
});
