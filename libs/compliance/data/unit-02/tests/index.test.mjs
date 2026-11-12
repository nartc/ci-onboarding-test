// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-data-02/index.js';

test('compliance-data-02: dependency-derived value', () => {
  assert.equal(weight, 3620);
  assert.deepEqual(evaluate(7), { project: 'compliance-data-02', value: 3627, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-02","partners-util-03"] });
});

test('compliance-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3621);
  assert.equal(evaluate(-7).value, 3613);
});

test('compliance-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-02","partners-util-03"]);
});
