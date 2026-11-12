// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-util-04/index.js';

test('partners-util-04: dependency-derived value', () => {
  assert.equal(weight, 516);
  assert.deepEqual(evaluate(7), { project: 'partners-util-04', value: 523, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"] });
});

test('partners-util-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 517);
  assert.equal(evaluate(-7).value, 509);
});

test('partners-util-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-util-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-util-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"]);
});
