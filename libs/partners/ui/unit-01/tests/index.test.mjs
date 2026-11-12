// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-ui-01/index.js';

test('partners-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134744);
  assert.deepEqual(evaluate(7), { project: 'partners-ui-01', value: 134751, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-01","fulfillment-feature-02"] });
});

test('partners-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134745);
  assert.equal(evaluate(-7).value, 134737);
});

test('partners-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","fulfillment-feature-01","fulfillment-feature-02"]);
});
