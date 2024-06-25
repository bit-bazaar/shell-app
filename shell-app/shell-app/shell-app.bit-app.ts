import { MfReact } from '@frontend/module-federation.react.apps-types.mf-rspack';
import {
  type NetlifyOptions,
  Netlify,
} from '@teambit/cloud-providers.deployers.netlify';

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
    shared: [
      {
        react: {
          singleton: true,
          requiredVersion: '18.3.1',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '18.3.1',
          eager: true,
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '6.23.1',
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: '11.11.5',
        },
        '@emotion/styled': {
          singleton: true,
          requiredVersion: '11.11.5',
        },
        '@bit-bazaar/design.navigation.navbar-item': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.navigation.navbar': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.data-display.avatar': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.layout.box': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.layout.toolbar': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.layout.container': {
          singleton: true,
          requiredVersion: '*',
        },
        '@bit-bazaar/design.navigation.menu': {
          singleton: true,
          requiredVersion: '*',
        },
      },
    ],
  },
  transformers: [
    (mutator) => {
      mutator.merge({
        devServer: {
          ...mutator.config.devServer,
          historyApiFallback: true,
        },
      });

      return mutator;
    },
    (mutator) => {
      mutator!.config!.output!.publicPath = 'https://bit-bazaar.netlify.app/';
      return mutator;
    },
  ],
  deploy: Netlify.deploy(netlifyConfig),
});
