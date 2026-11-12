// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-data-04/index.js';

test('compliance-data-04: dependency-derived value', () => {
  assert.equal(weight, 3615);
  assert.deepEqual(evaluate(7), { project: 'compliance-data-04', value: 3622, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-04","partners-util-01"] });
});

test('compliance-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3616);
  assert.equal(evaluate(-7).value, 3608);
});

test('compliance-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-04","partners-util-01"]);
});
