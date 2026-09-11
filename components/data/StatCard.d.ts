/** KPI tile: label, large Outfit value, optional delta and icon. */
export interface StatCardProps {
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: React.ReactNode;
  deltaTone?: 'up' | 'down' | 'neutral';
  icon?: string;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
