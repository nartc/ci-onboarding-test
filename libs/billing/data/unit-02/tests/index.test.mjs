// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/billing-data-02/index.js';

test('billing-data-02: dependency-derived value', () => {
  assert.equal(weight, 3637);
  assert.deepEqual(evaluate(7), { project: 'billing-data-02', value: 3644, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-02","identity-util-03"] });
});

test('billing-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3638);
  assert.equal(evaluate(-7).value, 3630);
});

test('billing-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('billing-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'billing-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","billing-util-01","billing-util-02","billing-util-03","billing-util-04","identity-util-02","identity-util-03"]);
});
