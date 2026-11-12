// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-util-02/index.js';

test('compliance-util-02: dependency-derived value', () => {
  assert.equal(weight, 521);
  assert.deepEqual(evaluate(7), { project: 'compliance-util-02', value: 528, dependencies: ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"] });
});

test('compliance-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 522);
  assert.equal(evaluate(-7).value, 514);
});

test('compliance-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-07","shared-l2-08","shared-l2-02","shared-l2-04"]);
});
