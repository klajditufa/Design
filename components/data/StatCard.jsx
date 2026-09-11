import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function StatCard({ label, value, delta, deltaTone = 'neutral', icon, style }) {
  const col = deltaTone === 'up' ? 'var(--color-success)' : deltaTone === 'down' ? 'var(--color-danger)' : 'var(--text-muted)';
  return <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'flex-start', minWidth: 0, ...style }}>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 600, color: 'var(--text-heading)', lineHeight: 1.1, marginTop: 4, letterSpacing: '-0.01em' }}>{value}</div>
      {delta && <div style={{ fontSize: 'var(--text-xs)', color: col, marginTop: 6, fontWeight: 500 }}>{delta}</div>}
    </div>
    {icon && <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--color-primary-soft)', color: 'var(--color-primary)', display: 'grid', placeItems: 'center', flex: 'none' }}><Icon name={icon} size={18} /></span>}
  </div>;
}
