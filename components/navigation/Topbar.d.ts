/** 56px white page header with title, breadcrumb and action slot. */
export interface TopbarProps {
  title: React.ReactNode;
  breadcrumb?: React.ReactNode;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Topbar(props: TopbarProps): JSX.Element;
