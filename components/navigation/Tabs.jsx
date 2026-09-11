import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const cur = value !== undefined ? value : inner;
  return <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-default)', ...style }}>
    {items.map(t => { const on = t.value === cur;
      return <button key={t.value} role="tab" aria-selected={on} type="button" onClick={() => { setInner(t.value); onChange && onChange(t.value); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 14px', marginBottom: -1, background: 'none', border: 0, borderBottom: '2px solid ' + (on ? 'var(--color-primary)' : 'transparent'), color: on ? 'var(--color-primary)' : 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', fontWeight: 600, cursor: 'pointer' }}>
        {t.icon && <Icon name={t.icon} size={16} />}{t.label}{t.count !== undefined && <span style={{ fontSize: 'var(--text-xs)', background: on ? 'var(--color-primary-soft)' : 'var(--gray-100)', borderRadius: 'var(--radius-pill)', padding: '1px 7px' }}>{t.count}</span>}
      </button>; })}
  </div>;
}
