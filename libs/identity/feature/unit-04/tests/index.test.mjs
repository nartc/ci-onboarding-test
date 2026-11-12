// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-feature-04/index.js';

test('identity-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22392);
  assert.deepEqual(evaluate(7), { project: 'identity-feature-04', value: 22399, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-04","commerce-data-01"] });
});

test('identity-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22393);
  assert.equal(evaluate(-7).value, 22385);
});

test('identity-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-04","commerce-data-01"]);
});
