// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-ui-02/index.js';

test('commerce-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134847);
  assert.deepEqual(evaluate(7), { project: 'commerce-ui-02', value: 134854, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","experimentation-feature-02","experimentation-feature-03"] });
});

test('commerce-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134848);
  assert.equal(evaluate(-7).value, 134840);
});

test('commerce-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","experimentation-feature-02","experimentation-feature-03"]);
});
