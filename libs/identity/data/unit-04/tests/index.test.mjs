// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-data-04/index.js';

test('identity-data-04: dependency-derived value', () => {
  assert.equal(weight, 3656);
  assert.deepEqual(evaluate(7), { project: 'identity-data-04', value: 3663, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-04","commerce-util-01"] });
});

test('identity-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3657);
  assert.equal(evaluate(-7).value, 3649);
});

test('identity-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-04","commerce-util-01"]);
});
