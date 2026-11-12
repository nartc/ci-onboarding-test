// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../dist/build/identity-api/index.js';

test('identity-api: dependency-derived value', () => {
  assert.equal(weight, 104763);
  assert.deepEqual(evaluate(7), { project: 'identity-api', value: 104770, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","identity-data-01","identity-data-02","identity-data-03","identity-data-04"] });
});

test('identity-api: default and negative seeds', () => {
  assert.equal(evaluate().value, 104764);
  assert.equal(evaluate(-7).value, 104756);
});

test('identity-api: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('identity-api: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'identity-api');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","identity-feature-01","identity-feature-02","identity-feature-03","identity-feature-04","identity-data-01","identity-data-02","identity-data-03","identity-data-04"]);
});
