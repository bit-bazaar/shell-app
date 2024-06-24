import { AuthGuard } from './auth-guard.js';

export const BasicAuthGuard = () => {
  return (
    <AuthGuard>Hi. I've logged in!</AuthGuard>
  );
}
