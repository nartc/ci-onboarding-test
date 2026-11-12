// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/identity-util-03/index.js';

test('identity-util-03: dependency-derived value', () => {
  assert.equal(weight, 524);
  assert.deepEqual(evaluate(7), { project: 'identity-util-03', value: 531, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('identity-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 525);
  assert.equal(evaluate(-7).value, 517);
});

test('identity-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
