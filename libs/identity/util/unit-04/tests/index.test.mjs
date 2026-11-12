// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-util-04/index.js';

test('identity-util-04: dependency-derived value', () => {
  assert.equal(weight, 528);
  assert.deepEqual(evaluate(7), { project: 'identity-util-04', value: 535, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('identity-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 529);
  assert.equal(evaluate(-7).value, 521);
});

test('identity-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
