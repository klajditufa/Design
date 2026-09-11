import React from 'react';
export function Field({ label, hint, error, required, children, style }) {
  return <label style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style }}>
    {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-body)' }}>{label}{required && <span style={{ color: 'var(--color-danger)' }}> *</span>}</span>}
    {children}
    {(error || hint) && <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--color-danger)' : 'var(--text-muted)' }}>{error || hint}</span>}
  </label>;
}
