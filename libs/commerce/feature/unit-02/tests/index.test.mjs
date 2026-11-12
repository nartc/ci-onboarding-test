// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-feature-02/index.js';

test('commerce-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22370);
  assert.deepEqual(evaluate(7), { project: 'commerce-feature-02', value: 22377, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-02","experimentation-data-03"] });
});

test('commerce-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22371);
  assert.equal(evaluate(-7).value, 22363);
});

test('commerce-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04","experimentation-data-02","experimentation-data-03"]);
});
