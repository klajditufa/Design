import React from 'react';
const tones = {
  neutral: ['var(--gray-100)', 'var(--gray-700)'], primary: ['var(--color-primary-soft)', 'var(--navy-700)'], success: ['var(--color-success-soft)', 'var(--color-success)'],
  warning: ['var(--color-warning-soft)', 'var(--color-warning)'], danger: ['var(--color-danger-soft)', 'var(--color-danger)'], info: ['var(--color-info-soft)', 'var(--color-info)'],
};
const dots = { active: 'var(--status-active)', reserved: 'var(--status-reserved)', overdue: 'var(--status-overdue)', done: 'var(--status-done)' };
export function Badge({ children, tone = 'neutral', status, style }) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 22, padding: '0 8px', borderRadius: 'var(--radius-sm)', background: bg, color: fg, fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.02em', whiteSpace: 'nowrap', ...style }}>
    {status && <span style={{ width: 7, height: 7, borderRadius: '50%', background: dots[status] }} />}{children}
  </span>;
}
