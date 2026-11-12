// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-feature-02/index.js';

test('payments-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22326);
  assert.deepEqual(evaluate(7), { project: 'payments-feature-02', value: 22333, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","payments-data-01","payments-data-02","payments-data-03","payments-data-04","shipping-data-02","shipping-data-03"] });
});

test('payments-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22327);
  assert.equal(evaluate(-7).value, 22319);
});

test('payments-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","payments-data-01","payments-data-02","payments-data-03","payments-data-04","shipping-data-02","shipping-data-03"]);
});
