// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/billing-portal/index.js';

test('billing-portal: dependency-derived value', () => {
  assert.equal(weight, 899672);
  assert.deepEqual(evaluate(7), { project: 'billing-portal', value: 899679, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","billing-ui-01","billing-ui-02","billing-ui-03","billing-ui-04","identity-ui-01","identity-ui-02"] });
});

test('billing-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 899673);
  assert.equal(evaluate(-7).value, 899665);
});

test('billing-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","billing-ui-01","billing-ui-02","billing-ui-03","billing-ui-04","identity-ui-01","identity-ui-02"]);
});
