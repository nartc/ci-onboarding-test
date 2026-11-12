// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-data-03/index.js';

test('compliance-data-03: dependency-derived value', () => {
  assert.equal(weight, 3620);
  assert.deepEqual(evaluate(7), { project: 'compliance-data-03', value: 3627, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-03","partners-util-04"] });
});

test('compliance-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3621);
  assert.equal(evaluate(-7).value, 3613);
});

test('compliance-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05","compliance-util-01","compliance-util-02","compliance-util-03","compliance-util-04","partners-util-03","partners-util-04"]);
});
