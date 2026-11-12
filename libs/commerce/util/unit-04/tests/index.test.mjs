// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-util-04/index.js';

test('commerce-util-04: dependency-derived value', () => {
  assert.equal(weight, 521);
  assert.deepEqual(evaluate(7), { project: 'commerce-util-04', value: 528, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('commerce-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 522);
  assert.equal(evaluate(-7).value, 514);
});

test('commerce-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
