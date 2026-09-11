/** Radio group; options may carry a hint. */
export interface RadioProps {
  options: Array<string | { value: string; label: string; hint?: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  inline?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
