// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-feature-01/index.js';

test('partners-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22347);
  assert.deepEqual(evaluate(7), { project: 'partners-feature-01', value: 22354, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-01","fulfillment-data-02"] });
});

test('partners-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22348);
  assert.equal(evaluate(-7).value, 22340);
});

test('partners-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-data-01","partners-data-02","partners-data-03","partners-data-04","fulfillment-data-01","fulfillment-data-02"]);
});
