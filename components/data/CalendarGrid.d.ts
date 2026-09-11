/** Month grid (weeks start Monday, Albanian day names) with booking bars colored by status. */
export interface CalendarGridProps {
  year: number;
  /** 1-12 */
  month: number;
  events?: Array<{ id: string | number; label: string; from: number; to: number; status?: 'active' | 'reserved' | 'overdue' | 'done' }>;
  today?: number;
  onDayClick?: (day: number) => void;
  style?: React.CSSProperties;
}
export function CalendarGrid(props: CalendarGridProps): JSX.Element;
