// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-data-01/index.js';

test('pricing-data-01: dependency-derived value', () => {
  assert.equal(weight, 3634);
  assert.deepEqual(evaluate(7), { project: 'pricing-data-01', value: 3641, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-01","recommendations-util-02"] });
});

test('pricing-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3635);
  assert.equal(evaluate(-7).value, 3627);
});

test('pricing-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-01","recommendations-util-02"]);
});
