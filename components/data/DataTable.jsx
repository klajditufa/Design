import React from 'react';
export function DataTable({ columns = [], rows = [], rowKey = 'id', onRowClick, dense, style }) {
  const [hov, setHov] = React.useState(null);
  const py = dense ? 8 : 12;
  return <div style={{ overflowX: 'auto', ...style }}><table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
    <thead><tr>{columns.map(c => <th key={c.key} style={{ textAlign: c.align || 'left', padding: '8px 12px', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-subtle)', borderBottom: '1px solid var(--border-default)', background: 'var(--surface-sunken)', whiteSpace: 'nowrap', width: c.width }}>{c.label}</th>)}</tr></thead>
    <tbody>{rows.map((r, i) => <tr key={r[rowKey] ?? i} onClick={onRowClick ? () => onRowClick(r) : undefined} onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} style={{ background: hov === i ? 'var(--gray-50)' : 'transparent', cursor: onRowClick ? 'pointer' : 'default' }}>
      {columns.map(c => <td key={c.key} style={{ padding: py + 'px 12px', borderBottom: '1px solid var(--border-default)', textAlign: c.align || 'left', fontFamily: c.mono ? 'var(--font-mono)' : 'inherit', fontSize: c.mono ? 13 : 'inherit', color: 'var(--text-body)', verticalAlign: 'middle', whiteSpace: c.nowrap ? 'nowrap' : 'normal' }}>{c.render ? c.render(r) : r[c.key]}</td>)}
    </tr>)}</tbody>
  </table></div>;
}
