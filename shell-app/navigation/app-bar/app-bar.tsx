import React, { type ReactNode } from 'react';
import { Avatar } from '@bit-bazaar/design.data-display.avatar';
import { Box } from '@bit-bazaar/design.layout.box';
import { AppBar as BaseAppBar } from '@bit-bazaar/design.surfaces.app-bar';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import { Menu, MenuItem } from '@bit-bazaar/design.navigation.menu';
import { IconButton } from '@bit-bazaar/design.actions.icon-button';

export type AppBarProps = {
  elements: {
    name: string;
    component: () => ReactNode;
  }[];
};

export function AppBar({ elements }: AppBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <BaseAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, fontWeight: 'bold' }}
          >
            B
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <span>
              {elements.map((element) => (
                <element.component key={element.name} />
              ))}
            </span>
            <span>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-profile"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar />
              </IconButton>
              <Menu
                id="menu-profile"
                anchorEl={anchorEl}
                // anchorOrigin={{
                //   vertical: 'top',
                //   horizontal: 'right',
                // }}
                keepMounted
                // transformOrigin={{
                //   vertical: 'bottom',
                //   horizontal: 'left',
                // }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </span>
            {/* </Box> */}
          </Box>
        </Toolbar>
      </BaseAppBar>
    </Box>
  );
}
