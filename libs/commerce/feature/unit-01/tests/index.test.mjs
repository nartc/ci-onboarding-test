// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-feature-01/index.js';

test('commerce-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22345);
  assert.deepEqual(evaluate(7), { project: 'commerce-feature-01', value: 22352, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-01","experimentation-data-02"] });
});

test('commerce-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22346);
  assert.equal(evaluate(-7).value, 22338);
});

test('commerce-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-01","experimentation-data-02"]);
});
