// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-data-02/index.js';

test('commerce-data-02: dependency-derived value', () => {
  assert.equal(weight, 3652);
  assert.deepEqual(evaluate(7), { project: 'commerce-data-02', value: 3659, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-02","experimentation-util-03"] });
});

test('commerce-data-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 3653);
  assert.equal(evaluate(-7).value, 3645);
});

test('commerce-data-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-data-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-data-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-02","experimentation-util-03"]);
});
