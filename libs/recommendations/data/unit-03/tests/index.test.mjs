// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/recommendations-data-03/index.js';

test('recommendations-data-03: dependency-derived value', () => {
  assert.equal(weight, 3609);
  assert.deepEqual(evaluate(7), { project: 'recommendations-data-03', value: 3616, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-03","media-util-04"] });
});

test('recommendations-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3610);
  assert.equal(evaluate(-7).value, 3602);
});

test('recommendations-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('recommendations-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'recommendations-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","recommendations-util-01","recommendations-util-02","recommendations-util-03","recommendations-util-04","media-util-03","media-util-04"]);
});
