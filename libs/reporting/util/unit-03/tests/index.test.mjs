// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-util-03/index.js';

test('reporting-util-03: dependency-derived value', () => {
  assert.equal(weight, 513);
  assert.deepEqual(evaluate(7), { project: 'reporting-util-03', value: 520, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"] });
});

test('reporting-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 514);
  assert.equal(evaluate(-7).value, 506);
});

test('reporting-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03"]);
});
