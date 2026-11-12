// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-feature-03/index.js';

test('payments-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22340);
  assert.deepEqual(evaluate(7), { project: 'payments-feature-03', value: 22347, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","payments-data-01","payments-data-02","payments-data-03","payments-data-04","shipping-data-03","shipping-data-04"] });
});

test('payments-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22341);
  assert.equal(evaluate(-7).value, 22333);
});

test('payments-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","payments-data-01","payments-data-02","payments-data-03","payments-data-04","shipping-data-03","shipping-data-04"]);
});
