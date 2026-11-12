// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-ui-01/index.js';

test('catalog-ui-01: dependency-derived value', () => {
  assert.equal(weight, 134599);
  assert.deepEqual(evaluate(7), { project: 'catalog-ui-01', value: 134606, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-01","billing-feature-02"] });
});

test('catalog-ui-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 134600);
  assert.equal(evaluate(-7).value, 134592);
});

test('catalog-ui-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-ui-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-ui-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-01","billing-feature-02"]);
});
