import React from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({ icon, label, size = 'md', variant = 'ghost', active, disabled, style, ...rest }) {
  const [h, setH] = React.useState(false);
  const d = size === 'sm' ? 32 : size === 'lg' ? 44 : 38;
  const dark = variant === 'dark';
  const bg = active ? (dark ? 'oklch(100% 0 0 / 0.12)' : 'var(--color-primary-soft)') : h ? (dark ? 'oklch(100% 0 0 / 0.08)' : 'var(--gray-100)') : variant === 'outline' ? 'var(--surface-card)' : 'transparent';
  return <button type="button" aria-label={label} title={label} disabled={disabled} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ width: d, height: d, display: 'inline-grid', placeItems: 'center', border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent', borderRadius: 'var(--radius-md)', background: bg, color: dark ? 'var(--text-on-dark)' : active ? 'var(--color-primary)' : 'var(--text-muted)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, transition: 'background var(--dur-fast) var(--ease-out)', ...style }} {...rest}>
    <Icon name={icon} size={size === 'sm' ? 16 : 18} />
  </button>;
}
