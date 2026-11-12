// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-data-01/index.js';

test('partners-data-01: dependency-derived value', () => {
  assert.equal(weight, 3647);
  assert.deepEqual(evaluate(7), { project: 'partners-data-01', value: 3654, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-01","fulfillment-util-02"] });
});

test('partners-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3648);
  assert.equal(evaluate(-7).value, 3640);
});

test('partners-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-util-01","partners-util-02","partners-util-03","partners-util-04","fulfillment-util-01","fulfillment-util-02"]);
});
