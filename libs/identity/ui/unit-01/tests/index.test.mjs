// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-ui-01/index.js';

test('identity-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134863);
  assert.deepEqual(evaluate(7), { project: 'identity-ui-01', value: 134870, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","commerce-feature-01","commerce-feature-02"] });
});

test('identity-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134864);
  assert.equal(evaluate(-7).value, 134856);
});

test('identity-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","commerce-feature-01","commerce-feature-02"]);
});
