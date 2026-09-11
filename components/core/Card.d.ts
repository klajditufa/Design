/** White surface with 1px border, 6px radius and subtle shadow. Optional header with title/actions. */
export interface CardProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  padding?: number;
  /** no shadow */
  flat?: boolean;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
