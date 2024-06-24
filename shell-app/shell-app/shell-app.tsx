import React, { lazy, Suspense } from 'react';
import { loadRemote } from '@module-federation/runtime';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AppBar } from '@bit-bazaar/shell-app.navigation.app-bar';
import { MfeMenu } from '@bit-bazaar/shell-app.navigation.mfe-menu';
import { Box } from '@bit-bazaar/design.layout.box';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import type { NavItem } from '@bit-bazaar/shell-app.types.navigation';

export type NavItemImport = {
  default: NavItem;
  [key: string]: NavItem | undefined;
};
export type RemoteComponent = {
  default: React.ComponentType;
  [key: string]: React.ComponentType | undefined;
};

function Store() {
  const StoreModule = React.lazy(() =>
    loadRemote<RemoteComponent>('storefront/store')
      .then((m) => {
        if (!m) {
          throw new Error('store module not found');
        }

        return { default: m.default };
      })
      .catch((e) => {
        console.error(`Error loading store module`, e);
        return { default: () => <div>Error loading store module</div> };
      })
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <StoreModule />
    </React.Suspense>
  );
}

function Blog() {
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
}

function Layout() {
  const StoreMenu = lazy(() =>
    loadRemote<NavItemImport>('storefront/storenav')
      .then((m) => {
        if (!m) {
          throw new Error('store nav item not found');
        }

        return {
          default: () => <MfeMenu item={m.default} />,
        };
      })
      .catch((e) => {
        console.error(`Error loading store nav item`, e);
        return { default: () => <div>Error loading store nav item</div> };
      })
  );

  const BlogMenu = lazy(() =>
    loadRemote<NavItemImport>('blog/blognav')
      .then((m) => {
        if (!m) throw new Error('blog nav item not found');
        return { default: () => <MfeMenu item={m.default} /> };
      })
      .catch((e) => {
        console.error(`Error loading blog nav item`, e);
        return { default: () => <div>Error loading blog nav item</div> };
      })
  );

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
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
}

export function ShellApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="store" element={<div>Store</div>} />
        <Route path="products" element={<Store />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}
