import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function EmptyState({ icon = 'inbox', title, description, action, style }) {
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 24px', gap: 8, color: 'var(--text-muted)', ...style }}>
    <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--surface-sunken)', display: 'grid', placeItems: 'center', color: 'var(--text-subtle)', marginBottom: 4 }}><Icon name={icon} size={22} /></span>
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-md)', color: 'var(--text-heading)' }}>{title}</div>
    {description && <div style={{ fontSize: 'var(--text-sm)', maxWidth: 360 }}>{description}</div>}
    {action && <div style={{ marginTop: 8 }}>{action}</div>}
  </div>;
}
