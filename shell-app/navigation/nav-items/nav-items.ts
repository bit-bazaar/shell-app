import { NavItem } from '@bit-bazaar/shell-app.types.navigation';
import storefrontNavItems from '@bit-bazaar/storefront.navigation.nav-items';
import blogNavItems from '@bit-bazaar/blog.navigation.nav-items';

export const navItems: NavItem[] = [...storefrontNavItems, ...blogNavItems];
