import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({ open, title, children, footer, onClose, width = 520, style }) {
  if (!open) return null;
  return <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'var(--surface-overlay)', display: 'grid', placeItems: 'center', zIndex: 100, padding: 24 }}>
    <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: width, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', maxHeight: '90vh', ...style }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid var(--border-default)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 600, margin: 0, flex: 1, color: 'var(--text-heading)' }}>{title}</h2>
        <IconButton icon="x" label="Mbyll" size="sm" onClick={onClose} />
      </header>
      <div style={{ padding: 20, overflow: 'auto' }}>{children}</div>
      {footer && <footer style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '14px 20px', borderTop: '1px solid var(--border-default)', background: 'var(--surface-sunken)', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>{footer}</footer>}
    </div>
  </div>;
}
