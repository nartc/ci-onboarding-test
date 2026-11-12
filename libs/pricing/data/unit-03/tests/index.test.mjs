// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/pricing-data-03/index.js';

test('pricing-data-03: dependency-derived value', () => {
  assert.equal(weight, 3625);
  assert.deepEqual(evaluate(7), { project: 'pricing-data-03', value: 3632, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-03","recommendations-util-04"] });
});

test('pricing-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3626);
  assert.equal(evaluate(-7).value, 3618);
});

test('pricing-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('pricing-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'pricing-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","pricing-util-01","pricing-util-02","pricing-util-03","pricing-util-04","recommendations-util-03","recommendations-util-04"]);
});
