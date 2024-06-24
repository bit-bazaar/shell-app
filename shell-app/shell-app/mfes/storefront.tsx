import React from 'react';
import { loadRemote } from '@module-federation/runtime';
import { MfeMenu } from '@bit-bazaar/shell-app.navigation.mfe-menu';
import type { MenuItemImport } from '../layout.js';
import type { RemoteComponent } from './types.js';

export const StoreMenu = React.lazy(() =>
  loadRemote<MenuItemImport>('storefront/storenav')
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

export const Store = () => {
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
};
