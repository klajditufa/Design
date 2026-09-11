import React from 'react';
export function Switch({ label, checked, defaultChecked, onChange, disabled, style }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  return <label onClick={() => { if (disabled) return; setInner(!on); onChange && onChange(!on); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontSize: 'var(--text-base)', userSelect: 'none', ...style }}>
    <span role="switch" aria-checked={on} style={{ width: 36, height: 20, borderRadius: 'var(--radius-pill)', background: on ? 'var(--color-primary)' : 'var(--gray-300)', position: 'relative', transition: 'background var(--dur-base) var(--ease-out)', flex: 'none' }}>
      <span style={{ position: 'absolute', top: 2, left: on ? 18 : 2, width: 16, height: 16, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-xs)', transition: 'left var(--dur-base) var(--ease-out)' }} />
    </span>{label}
  </label>;
}
