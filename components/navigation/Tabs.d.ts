/** Underline tabs with optional icon and count. */
export interface TabsProps {
  items: Array<{ value: string; label: string; icon?: string; count?: number }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
