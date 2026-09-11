/** Pill filter chip; removable or selectable. */
export interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
