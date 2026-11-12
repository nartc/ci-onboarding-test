// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-feature-04/index.js';

test('commerce-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22367);
  assert.deepEqual(evaluate(7), { project: 'commerce-feature-04', value: 22374, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-04","experimentation-data-01"] });
});

test('commerce-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22368);
  assert.equal(evaluate(-7).value, 22360);
});

test('commerce-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-04","experimentation-data-01"]);
});
