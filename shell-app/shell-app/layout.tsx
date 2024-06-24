import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@bit-bazaar/shell-app.navigation.app-bar';
import { Box } from '@bit-bazaar/design.layout.box';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import type { NavItem } from '@bit-bazaar/shell-app.types.navigation';
import { StoreMenu } from './mfes/storefront.js';
import { BlogMenu } from './mfes/blog.js';

export type MenuItemImport = {
  default: NavItem;
  [key: string]: NavItem | undefined;
};

export function Layout() {
  return (
    <>
      <AppBar
        elements={[
          {
            name: 'store',
            component: () => (
              <Suspense fallback={<p>...</p>}>
                <StoreMenu />
              </Suspense>
            ),
          },
          {
            name: 'blog',
            component: () => (
              <Suspense fallback={<p>...</p>}>
                <BlogMenu />
              </Suspense>
            ),
          },
        ]}
      />
      {/* @ts-ignore */}
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
}
