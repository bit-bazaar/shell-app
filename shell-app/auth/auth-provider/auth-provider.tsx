// AuthProvider.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

export type AuthProviderProps = {
  /**
   * Sets the component children.
   */
  children?: ReactNode;
};

const AuthContext = createContext<any>(undefined);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const auth0 = useAuth0();

  return <AuthContext.Provider value={auth0}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const domain = 'dev-recnwmxdyhuu7o4o.us.auth0.com';
  const clientId = 'p8tBZWYCqzVoREVZduWDX3TDgKKZEfW2';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthContextProvider>{children}</AuthContextProvider>
    </Auth0Provider>
  );
}
