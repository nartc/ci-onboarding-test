// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../dist/build/notifications-e2e/index.js';

test('notifications-e2e: dependency-derived value', () => {
  assert.equal(weight, 1897671);
  assert.deepEqual(evaluate(7), { project: 'notifications-e2e', value: 1897678, dependencies: ["notifications-api","notifications-portal","payments-portal"] });
});

test('notifications-e2e: default and negative seeds', () => {
  assert.equal(evaluate().value, 1897672);
  assert.equal(evaluate(-7).value, 1897664);
});

test('notifications-e2e: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-e2e: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-e2e');
  assert.deepEqual(buildMetadata.dependencies, ["notifications-api","notifications-portal","payments-portal"]);
});
