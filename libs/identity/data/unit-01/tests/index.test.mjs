// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-data-01/index.js';

test('identity-data-01: dependency-derived value', () => {
  assert.equal(weight, 3662);
  assert.deepEqual(evaluate(7), { project: 'identity-data-01', value: 3669, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-01","commerce-util-02"] });
});

test('identity-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3663);
  assert.equal(evaluate(-7).value, 3655);
});

test('identity-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-util-01","identity-util-02","identity-util-03","identity-util-04","commerce-util-01","commerce-util-02"]);
});
