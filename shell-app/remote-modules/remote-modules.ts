import type { PlainModuleMap } from '@bit-bazaar/shell-app.types.remote-modules';

export class RemoteModules {
  constructor(readonly moduleMap: PlainModuleMap) {}

  createImportMap() {
    return JSON.stringify(
      {
        imports: this.moduleMap.reduce((acc, { name, path }) => {
          acc[name] = path;
          return acc;
        }, {} as any),
      },
      null,
      2
    );
  }

  listModules() {
    return this.moduleMap.map(({ name }) => {
      return name;
    });
  }
}
