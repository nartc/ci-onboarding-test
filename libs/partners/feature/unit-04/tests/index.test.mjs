// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-feature-04/index.js';

test('partners-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22341);
  assert.deepEqual(evaluate(7), { project: 'partners-feature-04', value: 22348, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-04","fulfillment-data-01"] });
});

test('partners-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22342);
  assert.equal(evaluate(-7).value, 22334);
});

test('partners-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-04","fulfillment-data-01"]);
});
