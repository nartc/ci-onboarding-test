// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-util-02/index.js';

test('reporting-util-02: dependency-derived value', () => {
  assert.equal(weight, 515);
  assert.deepEqual(evaluate(7), { project: 'reporting-util-02', value: 522, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"] });
});

test('reporting-util-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 516);
  assert.equal(evaluate(-7).value, 508);
});

test('reporting-util-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-util-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-util-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02"]);
});
