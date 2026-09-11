import React from 'react';
export function Topbar({ title, breadcrumb, actions, style }) {
  return <header style={{ height: 'var(--topbar-h)', display: 'flex', alignItems: 'center', gap: 16, padding: '0 24px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-default)', boxSizing: 'border-box', ...style }}>
    <div style={{ minWidth: 0, flex: 1 }}>
      {breadcrumb && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', lineHeight: 1.2 }}>{breadcrumb}</div>}
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0, lineHeight: 1.2, color: 'var(--text-heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h1>
    </div>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{actions}</div>
  </header>;
}
