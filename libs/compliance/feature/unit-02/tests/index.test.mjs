// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-feature-02/index.js';

test('compliance-feature-02: dependency-derived value', () => {
  assert.equal(weight, 22244);
  assert.deepEqual(evaluate(7), { project: 'compliance-feature-02', value: 22251, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-02","partners-data-03"] });
});

test('compliance-feature-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 22245);
  assert.equal(evaluate(-7).value, 22237);
});

test('compliance-feature-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-feature-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-feature-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-02","partners-data-03"]);
});
