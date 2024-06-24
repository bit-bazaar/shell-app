import { Platform } from '@bitdev/platforms.platform';

/**
 * Please change the configuration of this Platform according to your Microfrontend architecture
 * Learn more on Bit Platform apps - https://bit.dev/docs/apps/create-platforms
 */

const shell = import.meta.resolve('@bit-bazaar/shell-app.shell-app');
const storefront = import.meta.resolve('@bit-bazaar/storefront.storefront');
const blog = import.meta.resolve('@bit-bazaar/blog.blog');

export const ShellPlatform = Platform.from({
  name: 'shell-platform',

  frontends: {
    main: shell,
    services: [
      [
        storefront,
        {
          name: 'storefront',
          remoteUrl:
            'storefront@https://bit-bazaar-storefront.netlify.app/mf-manifest.json',
        },
      ],
      [
        blog,
        {
          name: 'blog',
          remoteUrl:
            'blog@https://bit-bazaar-blog.netlify.app/mf-manifest.json',
        },
      ],
    ],
    mainPortRange: [3000, 3100],
  },
});

export default ShellPlatform;
