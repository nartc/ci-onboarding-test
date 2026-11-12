// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-data-01/index.js';

test('commerce-data-01: dependency-derived value', () => {
  assert.equal(weight, 3631);
  assert.deepEqual(evaluate(7), { project: 'commerce-data-01', value: 3638, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-01","experimentation-util-02"] });
});

test('commerce-data-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 3632);
  assert.equal(evaluate(-7).value, 3624);
});

test('commerce-data-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-data-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-data-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-01","experimentation-util-02"]);
});
