import React from 'react';
import { Icon } from '../core/Icon.jsx';
const map = { success: ['check-circle-2', 'var(--color-success)'], danger: ['alert-circle', 'var(--color-danger)'], info: ['info', 'var(--color-info)'], warning: ['alert-triangle', 'var(--color-warning)'] };
export function Toast({ tone = 'info', title, message, action, onClose, style }) {
  const [ic, col] = map[tone] || map.info;
  return <div role="status" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', width: 360, maxWidth: '100%', padding: '12px 14px', background: 'var(--gray-900)', color: 'var(--text-on-dark)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', boxSizing: 'border-box', ...style }}>
    <Icon name={ic} size={18} color={col} style={{ marginTop: 1 }} />
    <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 600, fontSize: 'var(--text-sm)' }}>{title}</div>{message && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--navy-200)', marginTop: 2 }}>{message}</div>}</div>
    {action && <button type="button" onClick={action.onClick} style={{ background: 'none', border: 0, color: 'var(--amber-400)', fontWeight: 600, fontSize: 'var(--text-sm)', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}>{action.label}</button>}
    {onClose && <button type="button" aria-label="Mbyll" onClick={onClose} style={{ background: 'none', border: 0, color: 'var(--navy-300)', cursor: 'pointer', padding: 0, display: 'inline-flex' }}><Icon name="x" size={16} /></button>}
  </div>;
}
