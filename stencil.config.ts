import { Config } from '@stencil/core';
import { docsReadme } from '@cheese-grinder/stencil-custom-readme';

export const config: Config = {
  namespace: 'stencil-test-build-docs',
  outputTargets: [
    docsReadme(),
    /**
     * // This should be not triggered when the test call for a build
     * {
     *   type: 'custom',
     *   name: 'custom-readme',
     *   taskShouldRun: 'onBuildOnly',
     *   generator(config, compilerCtx, buildCtx, docs) {
     *     // Do the doc generation
     *   },
     * },
     */
    
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
