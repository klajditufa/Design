import React from 'react';
import { Icon } from '../core/Icon.jsx';
const base = (focus, error, disabled, size) => ({ height: size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)', width: '100%', boxSizing: 'border-box', padding: '0 12px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-body)', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)', border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'), borderRadius: 'var(--radius-md)', outline: 'none', boxShadow: focus ? 'var(--ring-focus)' : 'none', transition: 'box-shadow var(--dur-fast), border-color var(--dur-fast)' });
export function Input({ icon, suffix, error, disabled, size = 'md', mono, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const s = base(focus, error, disabled, size);
  return <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', ...style }}>
    {icon && <span style={{ position: 'absolute', left: 10, display: 'inline-flex', color: 'var(--text-subtle)', pointerEvents: 'none' }}><Icon name={icon} size={16} /></span>}
    <input disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...s, paddingLeft: icon ? 34 : 12, paddingRight: suffix ? 44 : 12, fontFamily: mono ? 'var(--font-mono)' : s.fontFamily, fontSize: mono ? 14 : s.fontSize }} {...rest} />
    {suffix && <span style={{ position: 'absolute', right: 10, fontSize: 'var(--text-sm)', color: 'var(--text-subtle)', pointerEvents: 'none' }}>{suffix}</span>}
  </div>;
}
