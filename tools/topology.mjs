const pad = (n) => String(n + 1).padStart(2, '0');
export const targets = ['codegen', 'lint', 'typecheck', 'build', 'test', 'package', 'verify'];

/** Deterministic, layered DAG. Every dependency is backed by a source import. */
export function createProjects(config) {
  for (const key of ['sharedLayers', 'sharedPerLayer', 'projectsPerLayer']) {
    if (!Number.isInteger(config[key]) || config[key] < 1 || config[key] > 32) {
      throw new Error(`${key} must be an integer between 1 and 32`);
    }
  }
  if (!Array.isArray(config.domains) || config.domains.length < 1 ||
      config.domains.some((name) => typeof name !== 'string' || !/^[a-z][a-z0-9-]*$/.test(name)) ||
      new Set(config.domains).size !== config.domains.length) {
    throw new Error('domains must contain unique lowercase slugs');
  }
  const projects = [];
  const add = (name, root, scope, layer, dependencies, application = false) => {
    const project = { name, root, scope, layer, dependencies: [...new Set(dependencies)], application,
      ownWeight: projects.length % 17 + 1 };
    projects.push(project);
    return name;
  };
  const sharedName = (layer, index) => `shared-l${layer}-${pad(index % config.sharedPerLayer)}`;
  const shared = (index) => [0, 1, 3, 5].map((offset) => sharedName(config.sharedLayers - 1, index + offset));
  for (let layer = 0; layer < config.sharedLayers; layer++) {
    for (let i = 0; i < config.sharedPerLayer; i++) {
      add(sharedName(layer, i), `libs/shared/layer-${layer}/unit-${pad(i)}`, 'shared', `shared-${layer}`,
        layer === 0 ? [] : [0, 1, 3, 5].map((offset) => sharedName(layer - 1, i + offset)));
    }
  }
  const unit = (domain, layer, index) => `${domain}-${layer}-${pad(index % config.projectsPerLayer)}`;
  const layers = ['util', 'data', 'feature', 'ui'];
  for (const [layerIndex, layer] of layers.entries()) {
    for (const [domainIndex, domain] of config.domains.entries()) {
      const previous = config.domains[(domainIndex + config.domains.length - 1) % config.domains.length];
      for (let i = 0; i < config.projectsPerLayer; i++) {
        const dependencies = [...shared(i + domainIndex)];
        if (layerIndex > 0) {
          dependencies.push(...Array.from({ length: config.projectsPerLayer }, (_, j) => unit(domain, layers[layerIndex - 1], j)),
            unit(previous, layers[layerIndex - 1], i), unit(previous, layers[layerIndex - 1], i + 1));
        }
        add(unit(domain, layer, i), `libs/${domain}/${layer}/unit-${pad(i)}`, domain, layer, dependencies);
      }
    }
  }
  for (const [domainIndex, domain] of config.domains.entries()) {
    const previous = config.domains[(domainIndex + config.domains.length - 1) % config.domains.length];
    for (const kind of ['api', 'portal']) {
      const dependencies = [...shared(domainIndex), ...['feature', kind === 'api' ? 'data' : 'ui']
        .flatMap((layer) => Array.from({ length: config.projectsPerLayer }, (_, i) => unit(domain, layer, i)))];
      if (kind === 'portal') dependencies.push(unit(previous, 'ui', 0), unit(previous, 'ui', 1));
      add(`${domain}-${kind}`, `apps/${domain}/${kind}`, domain, kind, dependencies, true);
    }
  }
  for (const [i, domain] of config.domains.entries()) {
    const previous = config.domains[(i + config.domains.length - 1) % config.domains.length];
    add(`${domain}-e2e`, `e2e/${domain}`, domain, 'e2e',
      [`${domain}-api`, `${domain}-portal`, `${previous}-portal`], true);
  }
  const byName = new Map(projects.map((project) => [project.name, project]));
  for (const project of projects) {
    project.weight = project.ownWeight + project.dependencies.reduce((sum, name) => {
      const dependency = byName.get(name);
      if (dependency?.weight === undefined) throw new Error(`Non-topological edge: ${project.name} -> ${name}`);
      return sum + dependency.weight;
    }, 0);
  }
  return projects;
}
