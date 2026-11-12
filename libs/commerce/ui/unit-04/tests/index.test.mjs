// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-ui-04/index.js';

test('commerce-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134850);
  assert.deepEqual(evaluate(7), { project: 'commerce-ui-04', value: 134857, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","experimentation-feature-04","experimentation-feature-01"] });
});

test('commerce-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134851);
  assert.equal(evaluate(-7).value, 134843);
});

test('commerce-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","experimentation-feature-04","experimentation-feature-01"]);
});
