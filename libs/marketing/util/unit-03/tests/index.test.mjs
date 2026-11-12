// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/marketing-util-03/index.js';

test('marketing-util-03: dependency-derived value', () => {
  assert.equal(weight, 521);
  assert.deepEqual(evaluate(7), { project: 'marketing-util-03', value: 528, dependencies: ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"] });
});

test('marketing-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 522);
  assert.equal(evaluate(-7).value, 514);
});

test('marketing-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('marketing-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'marketing-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-08","shared-l2-01","shared-l2-03","shared-l2-05"]);
});
