// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/notifications-ui-02/index.js';

test('notifications-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134013);
  assert.deepEqual(evaluate(7), { project: 'notifications-ui-02', value: 134020, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","payments-feature-02","payments-feature-03"] });
});

test('notifications-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134014);
  assert.equal(evaluate(-7).value, 134006);
});

test('notifications-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('notifications-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'notifications-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","notifications-feature-01","notifications-feature-02","notifications-feature-03","notifications-feature-04","payments-feature-02","payments-feature-03"]);
});
