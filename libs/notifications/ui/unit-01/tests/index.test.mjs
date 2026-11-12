// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-ui-01/index.js';

test('notifications-ui-01: dependency-derived value', () => {
  assert.equal(weight, 133998);
  assert.deepEqual(evaluate(7), { project: 'notifications-ui-01', value: 134005, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","payments-feature-01","payments-feature-02"] });
});

test('notifications-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 133999);
  assert.equal(evaluate(-7).value, 133991);
});

test('notifications-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","payments-feature-01","payments-feature-02"]);
});
