import { Typography } from '@bit-bazaar/design.typography.typography';
import { useAuth } from '@bit-bazaar/shell-app.auth.auth-provider';

const capitalize = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export function Homepage() {
  const { user } = useAuth();
  if (user) {
    return (
      <div>
        <Typography variant="h1">
          Welcome back, {capitalize(user.nickname)}!
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h1">Welcome to Bit Bazaar!</Typography>
    </div>
  );
}
