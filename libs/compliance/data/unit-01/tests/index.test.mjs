// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-data-01/index.js';

test('compliance-data-01: dependency-derived value', () => {
  assert.equal(weight, 3614);
  assert.deepEqual(evaluate(7), { project: 'compliance-data-01', value: 3621, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-01","partners-util-02"] });
});

test('compliance-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3615);
  assert.equal(evaluate(-7).value, 3607);
});

test('compliance-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-01","partners-util-02"]);
});
