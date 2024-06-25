import { Homepage } from './homepage.js';
import { AuthProvider } from '@bit-bazaar/shell-app.auth.auth-provider';

export const BasicHomepage = () => {
  return (
    <AuthProvider>
      <Homepage />
    </AuthProvider>
  );
};
