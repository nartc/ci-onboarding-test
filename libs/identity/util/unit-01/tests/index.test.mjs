// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-util-01/index.js';

test('identity-util-01: dependency-derived value', () => {
  assert.equal(weight, 529);
  assert.deepEqual(evaluate(7), { project: 'identity-util-01', value: 536, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"] });
});

test('identity-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 530);
  assert.equal(evaluate(-7).value, 522);
});

test('identity-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07"]);
});
