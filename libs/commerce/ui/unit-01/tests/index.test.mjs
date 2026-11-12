// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-ui-01/index.js';

test('commerce-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134832);
  assert.deepEqual(evaluate(7), { project: 'commerce-ui-01', value: 134839, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","experimentation-feature-01","experimentation-feature-02"] });
});

test('commerce-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134833);
  assert.equal(evaluate(-7).value, 134825);
});

test('commerce-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","experimentation-feature-01","experimentation-feature-02"]);
});
