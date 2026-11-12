// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/commerce-api/index.js';

test('commerce-api: dependency-derived value', () => {
  assert.equal(weight, 104493);
  assert.deepEqual(evaluate(7), { project: 'commerce-api', value: 104500, dependencies: ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04"] });
});

test('commerce-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104494);
  assert.equal(evaluate(-7).value, 104486);
});

test('commerce-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('commerce-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'commerce-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-01","shared-l2-02","shared-l2-04","shared-l2-06","commerce-feature-01","commerce-feature-02","commerce-feature-03","commerce-feature-04","commerce-data-01","commerce-data-02","commerce-data-03","commerce-data-04"]);
});
