// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/partners-util-01/index.js';

test('partners-util-01: dependency-derived value', () => {
  assert.equal(weight, 516);
  assert.deepEqual(evaluate(7), { project: 'partners-util-01', value: 523, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('partners-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 517);
  assert.equal(evaluate(-7).value, 509);
});

test('partners-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
