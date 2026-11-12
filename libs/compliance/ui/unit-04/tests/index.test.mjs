// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-ui-04/index.js';

test('compliance-ui-04: dependency-derived value', () => {
  assert.equal(weight, 134228);
  assert.deepEqual(evaluate(7), { project: 'compliance-ui-04', value: 134235, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-04","partners-feature-01"] });
});

test('compliance-ui-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 134229);
  assert.equal(evaluate(-7).value, 134221);
});

test('compliance-ui-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-ui-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-ui-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-04","partners-feature-01"]);
});
