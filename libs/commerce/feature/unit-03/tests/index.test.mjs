// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-feature-03/index.js';

test('commerce-feature-03: dependency-derived value', () => {
  assert.equal(weight, 22374);
  assert.deepEqual(evaluate(7), { project: 'commerce-feature-03', value: 22381, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-03","experimentation-data-04"] });
});

test('commerce-feature-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 22375);
  assert.equal(evaluate(-7).value, 22367);
});

test('commerce-feature-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-feature-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-feature-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-03","experimentation-data-04"]);
});
