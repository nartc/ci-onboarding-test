// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-util-03/index.js';

test('recommendations-util-03: dependency-derived value', () => {
  assert.equal(weight, 511);
  assert.deepEqual(evaluate(7), { project: 'recommendations-util-03', value: 518, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"] });
});

test('recommendations-util-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 512);
  assert.equal(evaluate(-7).value, 504);
});

test('recommendations-util-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-util-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-util-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08"]);
});
