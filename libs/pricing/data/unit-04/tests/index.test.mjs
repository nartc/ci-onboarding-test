// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-data-04/index.js';

test('pricing-data-04: dependency-derived value', () => {
  assert.equal(weight, 3628);
  assert.deepEqual(evaluate(7), { project: 'pricing-data-04', value: 3635, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-04","recommendations-util-01"] });
});

test('pricing-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3629);
  assert.equal(evaluate(-7).value, 3621);
});

test('pricing-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-04","recommendations-util-01"]);
});
