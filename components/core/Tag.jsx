import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({ children, onRemove, selected, onClick, style }) {
  return <span onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 26, padding: '0 10px', borderRadius: 'var(--radius-pill)', border: '1px solid ' + (selected ? 'var(--color-primary)' : 'var(--border-strong)'), background: selected ? 'var(--color-primary-soft)' : 'var(--surface-card)', color: selected ? 'var(--navy-700)' : 'var(--text-body)', fontSize: 'var(--text-sm)', fontWeight: 500, cursor: onClick ? 'pointer' : 'default', ...style }}>
    {children}{onRemove && <span role="button" aria-label="Hiq" onClick={e => { e.stopPropagation(); onRemove(); }} style={{ display: 'inline-flex', cursor: 'pointer', color: 'var(--text-subtle)' }}><Icon name="x" size={13} /></span>}
  </span>;
}
