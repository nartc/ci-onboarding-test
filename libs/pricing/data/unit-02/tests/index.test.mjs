// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-data-02/index.js';

test('pricing-data-02: dependency-derived value', () => {
  assert.equal(weight, 3624);
  assert.deepEqual(evaluate(7), { project: 'pricing-data-02', value: 3631, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-02","recommendations-util-03"] });
});

test('pricing-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3625);
  assert.equal(evaluate(-7).value, 3617);
});

test('pricing-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-02","recommendations-util-03"]);
});
