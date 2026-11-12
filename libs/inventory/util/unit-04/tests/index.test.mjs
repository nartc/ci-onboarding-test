// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/inventory-util-04/index.js';

test('inventory-util-04: dependency-derived value', () => {
  assert.equal(weight, 520);
  assert.deepEqual(evaluate(7), { project: 'inventory-util-04', value: 527, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"] });
});

test('inventory-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 521);
  assert.equal(evaluate(-7).value, 513);
});

test('inventory-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('inventory-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'inventory-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"]);
});
