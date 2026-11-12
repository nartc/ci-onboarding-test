// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/payments-api/index.js';

test('payments-api: dependency-derived value', () => {
  assert.equal(weight, 104359);
  assert.deepEqual(evaluate(7), { project: 'payments-api', value: 104366, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","payments-data-01","payments-data-02","payments-data-03","payments-data-04"] });
});

test('payments-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104360);
  assert.equal(evaluate(-7).value, 104352);
});

test('payments-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","payments-data-01","payments-data-02","payments-data-03","payments-data-04"]);
});
