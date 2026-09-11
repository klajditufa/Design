import React from 'react';
const DAYS = ['Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht', 'Die'];
const colors = { active: 'var(--status-active)', reserved: 'var(--status-reserved)', overdue: 'var(--status-overdue)', done: 'var(--status-done)' };
export function CalendarGrid({ year, month, events = [], today, onDayClick, style }) {
  const first = new Date(year, month - 1, 1); const offset = (first.getDay() + 6) % 7; const dim = new Date(year, month, 0).getDate();
  const cells = []; for (let i = 0; i < offset; i++) cells.push(null); for (let d = 1; d <= dim; d++) cells.push(d); while (cells.length % 7) cells.push(null);
  const byDay = {}; events.forEach(e => { for (let d = e.from; d <= e.to; d++) (byDay[d] = byDay[d] || []).push(e); });
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,minmax(0,1fr))', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface-card)', ...style }}>
    {DAYS.map(d => <div key={d} style={{ padding: '8px 10px', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-subtle)', background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border-default)' }}>{d}</div>)}
    {cells.map((d, i) => <div key={i} onClick={d && onDayClick ? () => onDayClick(d) : undefined} style={{ minHeight: 84, padding: 6, borderRight: (i % 7) < 6 ? '1px solid var(--border-default)' : 0, borderBottom: i < cells.length - 7 ? '1px solid var(--border-default)' : 0, background: d ? 'transparent' : 'var(--gray-50)', cursor: d && onDayClick ? 'pointer' : 'default', display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
      {d && <span style={{ fontSize: 'var(--text-sm)', fontWeight: d === today ? 700 : 500, color: d === today ? '#fff' : 'var(--text-muted)', background: d === today ? 'var(--color-primary)' : 'transparent', width: 22, height: 22, borderRadius: '50%', display: 'inline-grid', placeItems: 'center', alignSelf: 'flex-start' }}>{d}</span>}
      {(byDay[d] || []).slice(0, 3).map(e => <span key={e.id} title={e.label} style={{ fontSize: 11, fontWeight: 500, padding: '2px 6px', borderRadius: 'var(--radius-sm)', background: colors[e.status] || colors.reserved, color: e.status === 'reserved' ? 'var(--navy-900)' : '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', opacity: e.from === d || first.getDay && d === 1 ? 1 : 0.85 }}>{e.from === d ? e.label : '\u00a0'}</span>)}
      {(byDay[d] || []).length > 3 && <span style={{ fontSize: 11, color: 'var(--text-subtle)' }}>+{byDay[d].length - 3}</span>}
    </div>)}
  </div>;
}
