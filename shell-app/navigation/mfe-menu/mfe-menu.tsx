import { useState, createElement } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@bit-bazaar/design.actions.button';
import { Menu, MenuItem } from '@bit-bazaar/design.navigation.menu';
// import ExpandMore from '@mui/icons-material/ExpandMore.js';
// import ExpandLess from '@mui/icons-material/ExpandLess.js';
import type { NavItem } from '@bit-bazaar/shell-app.types.navigation';

export type MfeMenuProps = {
  /**
   * Import of the selected NavItem remote module
   * @returns
   */
  item: NavItem;
};

export function MfeMenu({ item }: MfeMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {item.children ? (
        <>
          <Button
            onClick={handleToggle}
            endIcon={isOpen ? '∧' : '∨'}
            variant="text"
            sx={{ color: 'white' }}
            startIcon={item.icon ? createElement(item.icon) : null}
          >
            {item.label}
          </Button>
          <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
            {item.children.map((child) => (
              <MenuItem
                key={child.path}
                onClick={handleClose}
                component={Link}
                to={child.path}
              >
                {child.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <Button
          component={Link}
          to={item.path}
          variant="text"
          color="primary"
          startIcon={item.icon ? createElement(item.icon) : null}
        >
          {item.label}
        </Button>
      )}
    </>
  );
}
