// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-data-01/index.js';

test('notifications-data-01: dependency-derived value', () => {
  assert.equal(weight, 3612);
  assert.deepEqual(evaluate(7), { project: 'notifications-data-01', value: 3619, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-01","payments-util-02"] });
});

test('notifications-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3613);
  assert.equal(evaluate(-7).value, 3605);
});

test('notifications-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-util-01","notifications-util-02","notifications-util-03","notifications-util-04","payments-util-01","payments-util-02"]);
});
