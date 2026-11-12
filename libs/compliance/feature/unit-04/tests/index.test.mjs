// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-feature-04/index.js';

test('compliance-feature-04: dependency-derived value', () => {
  assert.equal(weight, 22269);
  assert.deepEqual(evaluate(7), { project: 'compliance-feature-04', value: 22276, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-04","partners-data-01"] });
});

test('compliance-feature-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 22270);
  assert.equal(evaluate(-7).value, 22262);
});

test('compliance-feature-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-feature-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-feature-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-04","partners-data-01"]);
});
