// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-data-03/index.js';

test('payments-data-03: dependency-derived value', () => {
  assert.equal(weight, 3625);
  assert.deepEqual(evaluate(7), { project: 'payments-data-03', value: 3632, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-03","shipping-util-04"] });
});

test('payments-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3626);
  assert.equal(evaluate(-7).value, 3618);
});

test('payments-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","payments-util-01","payments-util-02","payments-util-03","payments-util-04","shipping-util-03","shipping-util-04"]);
});
