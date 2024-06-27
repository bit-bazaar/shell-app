import { MfReact } from '@frontend/module-federation.react.apps-types.mf-rspack';
import {
  type NetlifyOptions,
  Netlify,
} from '@teambit/cloud-providers.deployers.netlify';
import { shellAppSharedDependencies } from '@bit-bazaar/shell-app.shared-dependencies';

const netlifyConfig: NetlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  productionSiteName: 'bit-bazaar',
  stagingSiteName: 'bit-bazaar',
  skipLaneDeployments: false,
  useDefaultRedirectsForSPA: true,
};

export default MfReact.from({
  name: 'shell-app',
  clientRoot: './shell-app.app-root.js',
  moduleFederation: {
    remotes: {
      storefront:
        'storefront@https://bit-bazaar-storefront.netlify.app/mf-manifest.json',
      blog: 'blog@https://bit-bazaar-blog.netlify.app/mf-manifest.json',
    },
    shared: shellAppSharedDependencies,
  },
  transformers: [
    (mutator, context) => {
      if (context.dev) {
        mutator.merge({
          devServer: {
            ...mutator.config.devServer,
            historyApiFallback: true,
          },
        });
      }

      return mutator;
    },
  ],
  deploy: Netlify.deploy(netlifyConfig),
});
