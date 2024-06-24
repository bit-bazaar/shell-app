import { RemoteModules } from './remote-modules.js';
import storefrontRemoteModules from '@bit-bazaar/storefront.remote-modules';
import blogRemoteModules from '@bit-bazaar/blog.remote-modules';

export const myRemoteModules = new RemoteModules([
  ...storefrontRemoteModules,
  ...blogRemoteModules,
  {
    name: 'react',
    path: 'https://esm.sh/react@18.2.0',
  },
  {
    name: '@learnbit/react-es-mfe.my-mfe',
    path: 'https://bit-react-esm-mfe.netlify.app/v0.0.2.js',
  },
]);
