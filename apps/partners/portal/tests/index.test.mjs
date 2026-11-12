// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/partners-portal/index.js';

test('partners-portal: dependency-derived value', () => {
  assert.equal(weight, 898883);
  assert.deepEqual(evaluate(7), { project: 'partners-portal', value: 898890, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","partners-ui-01","partners-ui-02","partners-ui-03","partners-ui-04","fulfillment-ui-01","fulfillment-ui-02"] });
});

test('partners-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 898884);
  assert.equal(evaluate(-7).value, 898876);
});

test('partners-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","partners-ui-01","partners-ui-02","partners-ui-03","partners-ui-04","fulfillment-ui-01","fulfillment-ui-02"]);
});
