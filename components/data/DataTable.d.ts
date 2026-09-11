/** Bordered rows, uppercase 12px header, hover highlight. Columns may render custom cells. */
export interface DataTableProps {
  columns: Array<{ key: string; label: string; align?: 'left' | 'right' | 'center'; mono?: boolean; nowrap?: boolean; width?: number | string; render?: (row: any) => React.ReactNode }>;
  rows: any[];
  rowKey?: string;
  onRowClick?: (row: any) => void;
  dense?: boolean;
  style?: React.CSSProperties;
}
export function DataTable(props: DataTableProps): JSX.Element;
