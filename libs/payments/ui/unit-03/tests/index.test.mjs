// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/payments-ui-03/index.js';

test('payments-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134762);
  assert.deepEqual(evaluate(7), { project: 'payments-ui-03', value: 134769, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-03","shipping-feature-04"] });
});

test('payments-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134763);
  assert.equal(evaluate(-7).value, 134755);
});

test('payments-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('payments-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'payments-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","payments-feature-01","payments-feature-02","payments-feature-03","payments-feature-04","shipping-feature-03","shipping-feature-04"]);
});
