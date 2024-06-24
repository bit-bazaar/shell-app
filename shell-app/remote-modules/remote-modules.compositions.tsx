import { myRemoteModules } from './remote-modules-example.js';

export const CreateModuleImports = () => {
  return <pre>{myRemoteModules.createImportMap()}</pre>;
};

export const ListModules = () => {
  const modules = myRemoteModules.listModules();
  return <pre>{modules.join(', ')}</pre>;
};
