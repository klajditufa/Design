/** Small status label. Use status prop for booking states (adds a colored dot). */
export interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** booking state dot */
  status?: 'active' | 'reserved' | 'overdue' | 'done';
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
