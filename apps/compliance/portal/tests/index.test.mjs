// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/compliance-portal/index.js';

test('compliance-portal: dependency-derived value', () => {
  assert.equal(weight, 896042);
  assert.deepEqual(evaluate(7), { project: 'compliance-portal', value: 896049, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","compliance-ui-01","compliance-ui-02","compliance-ui-03","compliance-ui-04","partners-ui-01","partners-ui-02"] });
});

test('compliance-portal: default and negative seeds', () => {
  assert.equal(evaluate().value, 896043);
  assert.equal(evaluate(-7).value, 896035);
});

test('compliance-portal: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-portal: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-portal');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-feature-01","compliance-feature-02","compliance-feature-03","compliance-feature-04","compliance-ui-01","compliance-ui-02","compliance-ui-03","compliance-ui-04","partners-ui-01","partners-ui-02"]);
});
