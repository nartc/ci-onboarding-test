// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-feature-01/index.js';

test('identity-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22440);
  assert.deepEqual(evaluate(7), { project: 'identity-feature-01', value: 22447, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-01","commerce-data-02"] });
});

test('identity-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22441);
  assert.equal(evaluate(-7).value, 22433);
});

test('identity-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-data-01","identity-data-02","identity-data-03","identity-data-04","commerce-data-01","commerce-data-02"]);
});
