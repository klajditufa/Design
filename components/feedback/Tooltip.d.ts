/** Hover label for icon-only controls. */
export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'bottom';
}
export function Tooltip(props: TooltipProps): JSX.Element;
