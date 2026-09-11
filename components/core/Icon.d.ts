/** Lucide icon rendered from the CDN bundle. Load https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js before use. */
export interface IconProps {
  /** kebab-case Lucide name, e.g. "car", "calendar-days", "file-text" */
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
