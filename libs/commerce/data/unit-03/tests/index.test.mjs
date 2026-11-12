// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/commerce-data-03/index.js';

test('commerce-data-03: dependency-derived value', () => {
  assert.equal(weight, 3625);
  assert.deepEqual(evaluate(7), { project: 'commerce-data-03', value: 3632, dependencies: ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-03","experimentation-util-04"] });
});

test('commerce-data-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 3626);
  assert.equal(evaluate(-7).value, 3618);
});

test('commerce-data-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-data-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-data-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-03","shared-l2-04","shared-l2-06","shared-l2-08","commerce-util-01","commerce-util-02","commerce-util-03","commerce-util-04","experimentation-util-03","experimentation-util-04"]);
});
