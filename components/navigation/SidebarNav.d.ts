/** Navy app sidebar with brand, grouped nav items and footer slot. */
export interface SidebarNavProps {
  items: Array<{ value: string; label: string; icon: string; count?: number } | { section: string }>;
  value?: string;
  onChange?: (value: string) => void;
  brand?: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SidebarNav(props: SidebarNavProps): JSX.Element;
