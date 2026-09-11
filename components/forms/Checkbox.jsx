import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({ label, checked, defaultChecked, onChange, disabled, style }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => { if (disabled) return; setInner(!on); onChange && onChange(!on); };
  return <label onClick={toggle} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontSize: 'var(--text-base)', userSelect: 'none', ...style }}>
    <span role="checkbox" aria-checked={on} style={{ width: 18, height: 18, borderRadius: 'var(--radius-sm)', border: '1px solid ' + (on ? 'var(--color-primary)' : 'var(--border-strong)'), background: on ? 'var(--color-primary)' : 'var(--surface-card)', display: 'inline-grid', placeItems: 'center', color: '#fff', transition: 'background var(--dur-fast)' }}>{on && <Icon name="check" size={13} strokeWidth={3} />}</span>
    {label}
  </label>;
}
