// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-ui-03/index.js';

test('recommendations-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134243);
  assert.deepEqual(evaluate(7), { project: 'recommendations-ui-03', value: 134250, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-03","media-feature-04"] });
});

test('recommendations-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134244);
  assert.equal(evaluate(-7).value, 134236);
});

test('recommendations-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","recommendations-feature-01","recommendations-feature-02","recommendations-feature-03","recommendations-feature-04","media-feature-03","media-feature-04"]);
});
