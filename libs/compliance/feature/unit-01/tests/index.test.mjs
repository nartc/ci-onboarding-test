// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/compliance-feature-01/index.js';

test('compliance-feature-01: dependency-derived value', () => {
  assert.equal(weight, 22268);
  assert.deepEqual(evaluate(7), { project: 'compliance-feature-01', value: 22275, dependencies: ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-01","partners-data-02"] });
});

test('compliance-feature-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 22269);
  assert.equal(evaluate(-7).value, 22261);
});

test('compliance-feature-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('compliance-feature-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'compliance-feature-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-06","shared-l2-07","shared-l2-01","shared-l2-03","compliance-data-01","compliance-data-02","compliance-data-03","compliance-data-04","partners-data-01","partners-data-02"]);
});
