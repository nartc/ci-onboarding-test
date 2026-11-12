// Generated, deterministic fixtures; these assertions really execute the compiled bundle.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { evaluate, weight, buildMetadata } from '../../../../../dist/build/observability-data-04/index.js';

test('observability-data-04: dependency-derived value', () => {
  assert.equal(weight, 3654);
  assert.deepEqual(evaluate(7), { project: 'observability-data-04', value: 3661, dependencies: ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","observability-util-01","observability-util-02","observability-util-03","observability-util-04","compliance-util-04","compliance-util-01"] });
});

test('observability-data-04: default and negative seeds', () => {
  assert.equal(evaluate().value, 3655);
  assert.equal(evaluate(-7).value, 3647);
});

test('observability-data-04: rejects invalid input', () => {
  for (const seed of [NaN, Infinity, -Infinity]) assert.throws(() => evaluate(seed), TypeError);
});

test('observability-data-04: generated build metadata', () => {
  assert.equal(buildMetadata.name, 'observability-data-04');
  assert.deepEqual(buildMetadata.dependencies, ["shared-l2-02","shared-l2-03","shared-l2-05","shared-l2-07","observability-util-01","observability-util-02","observability-util-03","observability-util-04","compliance-util-04","compliance-util-01"]);
});
