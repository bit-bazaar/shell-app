export interface NavItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}
