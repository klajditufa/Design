import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function SidebarNav({ items = [], value, onChange, brand, footer, style }) {
  const [hov, setHov] = React.useState(null);
  return <nav style={{ width: 'var(--sidebar-w)', minHeight: '100%', background: 'var(--surface-sidebar)', color: 'var(--text-on-dark)', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', padding: '16px 12px', ...style }}>
    <div style={{ padding: '4px 10px 20px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em' }}>{brand}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map(it => it.section ? <div key={it.section} style={{ padding: '16px 10px 6px', fontSize: 11, fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>{it.section}</div> :
        <button key={it.value} type="button" onClick={() => onChange && onChange(it.value)} onMouseEnter={() => setHov(it.value)} onMouseLeave={() => setHov(null)} style={{ display: 'flex', alignItems: 'center', gap: 10, height: 36, padding: '0 10px', border: 0, borderRadius: 'var(--radius-md)', background: it.value === value ? 'oklch(100% 0 0 / 0.14)' : hov === it.value ? 'oklch(100% 0 0 / 0.07)' : 'transparent', color: it.value === value ? '#fff' : 'var(--navy-200)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', fontWeight: it.value === value ? 600 : 500, cursor: 'pointer', textAlign: 'left', transition: 'background var(--dur-fast)' }}>
          <Icon name={it.icon} size={17} /><span style={{ flex: 1 }}>{it.label}</span>{it.count !== undefined && <span style={{ fontSize: 11, fontWeight: 600, background: 'var(--amber-500)', color: 'var(--navy-900)', borderRadius: 'var(--radius-pill)', padding: '1px 6px' }}>{it.count}</span>}
        </button>)}
    </div>
    <div style={{ marginTop: 'auto' }}>{footer}</div>
  </nav>;
}
