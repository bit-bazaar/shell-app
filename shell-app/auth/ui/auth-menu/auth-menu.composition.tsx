import { AuthProvider } from '@bit-bazaar/shell-app.auth.auth-provider';
import { AuthMenu } from './auth-menu.js';

export const BasicAuthMenu = () => {
  return (
    <AuthProvider>
      <AuthMenu />
    </AuthProvider>
  );
};
