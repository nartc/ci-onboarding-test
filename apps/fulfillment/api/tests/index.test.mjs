// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/fulfillment-api/index.js';

test('fulfillment-api: dependency-derived value', () => {
  assert.equal(weight, 104807);
  assert.deepEqual(evaluate(7), { project: 'fulfillment-api', value: 104814, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04"] });
});

test('fulfillment-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104808);
  assert.equal(evaluate(-7).value, 104800);
});

test('fulfillment-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('fulfillment-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'fulfillment-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","fulfillment-feature-01","fulfillment-feature-02","fulfillment-feature-03","fulfillment-feature-04","fulfillment-data-01","fulfillment-data-02","fulfillment-data-03","fulfillment-data-04"]);
});
