// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/partners-api/index.js';

test('partners-api: dependency-derived value', () => {
  assert.equal(weight, 104452);
  assert.deepEqual(evaluate(7), { project: 'partners-api', value: 104459, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","partners-data-01","partners-data-02","partners-data-03","partners-data-04"] });
});

test('partners-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104453);
  assert.equal(evaluate(-7).value, 104445);
});

test('partners-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('partners-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'partners-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","partners-feature-01","partners-feature-02","partners-feature-03","partners-feature-04","partners-data-01","partners-data-02","partners-data-03","partners-data-04"]);
});
