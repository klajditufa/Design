import React from 'react';
import { Icon } from '../core/Icon.jsx';
const base = (focus, error, disabled, size) => ({ height: size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)', width: '100%', boxSizing: 'border-box', padding: '0 12px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-body)', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)', border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'), borderRadius: 'var(--radius-md)', outline: 'none', boxShadow: focus ? 'var(--ring-focus)' : 'none', transition: 'box-shadow var(--dur-fast), border-color var(--dur-fast)' });
export function Select({ options = [], error, disabled, size = 'md', placeholder, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%', ...style }}>
    <select disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...base(focus, error, disabled, size), appearance: 'none', paddingRight: 34, cursor: 'pointer' }} {...rest}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(o => typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    <span style={{ position: 'absolute', right: 10, display: 'inline-flex', color: 'var(--text-subtle)', pointerEvents: 'none' }}><Icon name="chevron-down" size={16} /></span>
  </div>;
}
