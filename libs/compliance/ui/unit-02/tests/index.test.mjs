// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-ui-02/index.js';

test('compliance-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134261);
  assert.deepEqual(evaluate(7), { project: 'compliance-ui-02', value: 134268, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-02","partners-feature-03"] });
});

test('compliance-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134262);
  assert.equal(evaluate(-7).value, 134254);
});

test('compliance-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","partners-feature-02","partners-feature-03"]);
});
