// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-feature-01/index.js';

test('notifications-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22204);
  assert.deepEqual(evaluate(7), { project: 'notifications-feature-01', value: 22211, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-01","payments-data-02"] });
});

test('notifications-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22205);
  assert.equal(evaluate(-7).value, 22197);
});

test('notifications-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-01","payments-data-02"]);
});
