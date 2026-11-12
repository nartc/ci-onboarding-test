// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-feature-02/index.js';

test('notifications-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22212);
  assert.deepEqual(evaluate(7), { project: 'notifications-feature-02', value: 22219, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-02","payments-data-03"] });
});

test('notifications-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22213);
  assert.equal(evaluate(-7).value, 22205);
});

test('notifications-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-02","payments-data-03"]);
});
