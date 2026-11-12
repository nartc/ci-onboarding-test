// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-ui-02/index.js';

test('catalog-ui-02: dependency-derived value', () => {
  assert.equal(weight, 134608);
  assert.deepEqual(evaluate(7), { project: 'catalog-ui-02', value: 134615, dependencies: ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-02","billing-feature-03"] });
});

test('catalog-ui-02: default and negative seeds', () => {
  assert.equal(evaluate().value, 134609);
  assert.equal(evaluate(-7).value, 134601);
});

test('catalog-ui-02: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-ui-02: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-ui-02');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-05","shared-l2-06","shared-l2-08","shared-l2-02","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-02","billing-feature-03"]);
});
