// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-ui-01/index.js';

test('compliance-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134247);
  assert.deepEqual(evaluate(7), { project: 'compliance-ui-01', value: 134254, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-01","partners-feature-02"] });
});

test('compliance-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134248);
  assert.equal(evaluate(-7).value, 134240);
});

test('compliance-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-01","partners-feature-02"]);
});
