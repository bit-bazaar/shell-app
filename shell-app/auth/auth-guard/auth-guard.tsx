// AuthGuard.tsx
import React from 'react';
import { useAuth } from '@bit-bazaar/shell-app.auth.auth-provider';
import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

export type AuthGuardProps = {
  /**
   * The component's children to be protected by the guard.
   */
   children: ReactNode | ((user: any) => ReactNode);
};

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading ...</div>; // Display a loading indicator while checking authentication status
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirect unauthenticated users to the root
  }

  if (typeof children === 'function') {
    return children(user);
  }

  return <>{children}</>; // Render the children for authenticated users
}
