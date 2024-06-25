import React from 'react';
import { loadRemote } from '@module-federation/runtime';
import { MfeMenu } from '@bit-bazaar/shell-app.navigation.mfe-menu';
import type { MenuItemImport } from '../layout.js';
import type { RemoteComponent } from './types.js';

export const BlogMenu = React.lazy(() =>
  loadRemote<MenuItemImport>('blog/blognav')
    .then((m) => {
      if (!m) throw new Error('blog nav item not found');
      return { default: () => <MfeMenu mfePath="blog" item={m.default} /> };
    })
    .catch((e) => {
      console.error(`Error loading blog nav item`, e);
      return { default: () => <div>Error loading blog nav item</div> };
    })
);

export const Blog = () => {
  const BlogModule = React.lazy(() =>
    loadRemote<RemoteComponent>('blog/blog')
      .then((m) => {
        if (!m) {
          throw new Error('blog module not found');
        }

        return { default: m.default };
      })
      .catch((e) => {
        console.error(`Error loading blog module`, e);
        return { default: () => <div>Error loading blog module</div> };
      })
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BlogModule />
    </React.Suspense>
  );
};
