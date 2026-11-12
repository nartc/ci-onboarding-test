// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-util-01/index.js';

test('commerce-util-01: dependency-derived value', () => {
  assert.equal(weight, 514);
  assert.deepEqual(evaluate(7), { project: 'commerce-util-01', value: 521, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"] });
});

test('commerce-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 515);
  assert.equal(evaluate(-7).value, 507);
});

test('commerce-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06"]);
});
