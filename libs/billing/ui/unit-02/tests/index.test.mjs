// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-ui-02/index.js';

test('billing-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134932);
  assert.deepEqual(evaluate(7), { project: 'billing-ui-02', value: 134939, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-02","identity-feature-03"] });
});

test('billing-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134933);
  assert.equal(evaluate(-7).value, 134925);
});

test('billing-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","billing-feature-01","billing-feature-02","billing-feature-03","billing-feature-04","identity-feature-02","identity-feature-03"]);
});
