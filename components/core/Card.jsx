import React from 'react';
export function Card({ children, title, subtitle, actions, padding = 20, flat, style }) {
  return <section style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', boxShadow: flat ? 'none' : 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', minWidth: 0, ...style }}>
    {(title || actions) && <header style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px ' + padding + 'px', borderBottom: '1px solid var(--border-default)' }}>
      <div style={{ minWidth: 0, flex: 1 }}>{title && <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-md)', fontWeight: 600, margin: 0, color: 'var(--text-heading)' }}>{title}</h3>}{subtitle && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>}</div>
      {actions && <div style={{ display: 'flex', gap: 8, flex: 'none' }}>{actions}</div>}
    </header>}
    <div style={{ padding }}>{children}</div>
  </section>;
}
