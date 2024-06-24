export type PlainModuleMap = Array<{
  /**
   * the package name of the module
   */
  readonly name: string;

  /**
   * the remote entry file of the module
   */
  readonly path: string;
}>;
