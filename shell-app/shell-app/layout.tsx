import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '@bit-bazaar/shell-app.navigation.app-bar';
import { Container } from '@bit-bazaar/design.layout.container';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import type { NavItem } from '@bit-bazaar/shell-app.types.navigation';
import { Button } from '@bit-bazaar/design.actions.button';
import { StoreMenu } from './mfes/storefront.js';
import { BlogMenu } from './mfes/blog.js';

export type MenuItemImport = {
  default: NavItem;
  [key: string]: NavItem | undefined;
};

const MenuFallback = ({ mfeName }: { mfeName: string }) => (
  // @ts-ignore
  <Button to={mfeName.toLowerCase()} variant="text" sx={{ color: 'white' }}>
    {mfeName}
  </Button>
);

export function Layout() {
  return (
    <>
      <AppBar
        elements={[
          {
            name: 'store',
            component: () => (
              <Suspense fallback={<MenuFallback mfeName="Store" />}>
                <StoreMenu />
              </Suspense>
            ),
          },
          {
            name: 'blog',
            component: () => (
              <Suspense fallback={<MenuFallback mfeName="Blog" />}>
                <BlogMenu />
              </Suspense>
            ),
          },
        ]}
      />
      {/* @ts-ignore */}
      <Container component="main" maxWidth="lg">
        <Toolbar />
        <Outlet />
      </Container>
    </>
  );
}
