// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/reporting-util-01/index.js';

test('reporting-util-01: dependency-derived value', () => {
  assert.equal(weight, 511);
  assert.deepEqual(evaluate(7), { project: 'reporting-util-01', value: 518, dependencies: ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"] });
});

test('reporting-util-01: default and negative seeds', () => {
  assert.equal(evaluate().value, 512);
  assert.equal(evaluate(-7).value, 504);
});

test('reporting-util-01: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('reporting-util-01: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'reporting-util-01');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-04","shared-l2-05","shared-l2-07","shared-l2-01"]);
});
