// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/catalog-ui-03/index.js';

test('catalog-ui-03: dependency-derived value', () => {
  assert.equal(weight, 134621);
  assert.deepEqual(evaluate(7), { project: 'catalog-ui-03', value: 134628, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-03","billing-feature-04"] });
});

test('catalog-ui-03: default and negative seeds', () => {
  assert.equal(evaluate().value, 134622);
  assert.equal(evaluate(-7).value, 134614);
});

test('catalog-ui-03: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('catalog-ui-03: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'catalog-ui-03');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","catalog-feature-01","catalog-feature-02","catalog-feature-03","catalog-feature-04","billing-feature-03","billing-feature-04"]);
});
