// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-data-04/index.js';

test('commerce-data-04: dependency-derived value', () => {
  assert.equal(weight, 3622);
  assert.deepEqual(evaluate(7), { project: 'commerce-data-04', value: 3629, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-04","experimentation-util-01"] });
});

test('commerce-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3623);
  assert.equal(evaluate(-7).value, 3615);
});

test('commerce-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-04","experimentation-util-01"]);
});
