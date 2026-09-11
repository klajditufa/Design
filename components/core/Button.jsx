import React from 'react';
import { Icon } from './Icon.jsx';
const sizes = { sm: { h: 'var(--control-h-sm)', px: 12, fs: 'var(--text-sm)' }, md: { h: 'var(--control-h-md)', px: 16, fs: 'var(--text-base)' }, lg: { h: 'var(--control-h-lg)', px: 20, fs: 'var(--text-md)' } };
const variants = {
  primary: { bg: 'var(--color-primary)', fg: 'var(--color-on-primary)', bd: 'transparent', hbg: 'var(--color-primary-hover)', abg: 'var(--color-primary-active)' },
  secondary: { bg: 'var(--surface-card)', fg: 'var(--text-body)', bd: 'var(--border-strong)', hbg: 'var(--gray-100)', abg: 'var(--gray-200)' },
  ghost: { bg: 'transparent', fg: 'var(--text-body)', bd: 'transparent', hbg: 'var(--gray-100)', abg: 'var(--gray-200)' },
  danger: { bg: 'var(--color-danger)', fg: '#fff', bd: 'transparent', hbg: 'var(--red-500)', abg: 'var(--red-700)' },
  accent: { bg: 'var(--color-accent)', fg: 'var(--navy-900)', bd: 'transparent', hbg: 'var(--amber-400)', abg: 'var(--amber-700)' },
};
export function Button({ children, variant = 'primary', size = 'md', icon, iconRight, disabled, fullWidth, style, type = 'button', ...rest }) {
  const [st, setSt] = React.useState('idle');
  const s = sizes[size] || sizes.md, v = variants[variant] || variants.primary;
  const bg = st === 'active' ? v.abg : st === 'hover' ? v.hbg : v.bg;
  return <button type={type} disabled={disabled} onMouseEnter={() => setSt('hover')} onMouseLeave={() => setSt('idle')} onMouseDown={() => setSt('active')} onMouseUp={() => setSt('hover')}
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: s.h, padding: '0 ' + s.px + 'px', fontFamily: 'var(--font-body)', fontSize: s.fs, fontWeight: 600, lineHeight: 1, color: v.fg, background: bg, border: '1px solid ' + v.bd, borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, width: fullWidth ? '100%' : undefined, transition: 'background var(--dur-fast) var(--ease-out)', whiteSpace: 'nowrap', ...style }} {...rest}>
    {icon && <Icon name={icon} size={size === 'sm' ? 15 : 17} />}{children}{iconRight && <Icon name={iconRight} size={size === 'sm' ? 15 : 17} />}
  </button>;
}
