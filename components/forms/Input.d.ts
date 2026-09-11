/** Text input with optional leading icon and trailing suffix (unit/currency). */
export interface InputProps {
  icon?: string;
  suffix?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  /** JetBrains Mono for plates, numbers */
  mono?: boolean;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
