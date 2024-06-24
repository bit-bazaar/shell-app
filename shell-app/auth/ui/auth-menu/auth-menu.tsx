import React from 'react';
import { Avatar } from '@bit-bazaar/design.data-display.avatar';
import { Menu, MenuItem } from '@bit-bazaar/design.navigation.menu';
import { IconButton } from '@bit-bazaar/design.actions.icon-button';
import { Button } from '@bit-bazaar/design.actions.button';
import { useAuth } from '@bit-bazaar/shell-app.auth.auth-provider';

export type AuthMenuProps = {};

export const AuthMenu = () => {
  const { user, loginWithRedirect, logout } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  if (user)
    return (
      <>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-profile"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Avatar alt="user initials" src={user.picture} />
        </IconButton>
        <Menu
          id="menu-profile"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem to="/profile">Profile</MenuItem>
          <MenuItem
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </MenuItem>
        </Menu>
      </>
    );
  return (
    <Button
      sx={{
        color: 'white',
      }}
      variant="text"
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};
