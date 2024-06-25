import type { ReactNode } from 'react';
import { Box } from '@bit-bazaar/design.layout.box';
import { AppBar as BaseAppBar } from '@bit-bazaar/design.surfaces.app-bar';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import { IconButton } from '@bit-bazaar/design.actions.icon-button';
import { AuthMenu } from '@bit-bazaar/shell-app.auth.ui.auth-menu';

export type AppBarProps = {
  elements: {
    name: string;
    component: () => ReactNode;
  }[];
};

export function AppBar({ elements }: AppBarProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <BaseAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4, p: 0 }}
            to="/"
          >
            <img
              src="https://static.bit.dev/extensions-icons/my-project.svg"
              alt="logo"
              style={{ height: 40 }}
            />
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
              <AuthMenu />
            </span>
          </Box>
        </Toolbar>
      </BaseAppBar>
    </Box>
  );
}
