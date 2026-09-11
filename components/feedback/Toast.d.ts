/** Dark bottom-right notification. */
export interface ToastProps {
  tone?: 'success' | 'danger' | 'info' | 'warning';
  title: React.ReactNode;
  message?: React.ReactNode;
  action?: { label: string; onClick: () => void };
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;
