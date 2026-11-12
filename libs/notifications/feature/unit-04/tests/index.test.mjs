// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-feature-04/index.js';

test('notifications-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22209);
  assert.deepEqual(evaluate(7), { project: 'notifications-feature-04', value: 22216, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-04","payments-data-01"] });
});

test('notifications-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22210);
  assert.equal(evaluate(-7).value, 22202);
});

test('notifications-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","notifications-data-01","notifications-data-02","notifications-data-03","notifications-data-04","payments-data-04","payments-data-01"]);
});
