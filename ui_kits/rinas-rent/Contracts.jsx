const { Button, Card, Badge, DataTable, Input, Select, Tabs, EmptyState, Tag } = window.RinasRentDesignSystem_a23b91;
function Contracts({ openContract, onNew }) {
  const D = window.RR_DATA;
  const [tab, setTab] = React.useState('all');
  const [q, setQ] = React.useState('');
  const rows = D.contracts.filter(c => (tab === 'all' || c.status === tab) && (c.client + c.nr + c.car).toLowerCase().includes(q.toLowerCase()));
  return <>
    <Tabs value={tab} onChange={setTab} items={[{ value: 'all', label: 'Të gjitha', count: D.contracts.length }, { value: 'active', label: 'Aktive', count: 1 }, { value: 'reserved', label: 'Rezervuar', count: 1 }, { value: 'overdue', label: 'Në vonesë', count: 1 }, { value: 'done', label: 'Mbyllur', count: 2 }]} />
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}><Input icon="search" placeholder="Kërko klient, nr. kontrate, targë…" value={q} onChange={e => setQ(e.target.value)} style={{ maxWidth: 360 }} /><Select style={{ width: 180 }} options={['Shtator 2026', 'Gusht 2026', 'Korrik 2026']} /><Select style={{ width: 200 }} options={['Të gjitha makinat', 'Toyota Yaris', 'VW Golf 8', 'Dacia Duster']} /></div>
    <Card padding={0}>
      {rows.length ? <DataTable onRowClick={openContract} rows={rows} columns={[{ key: 'nr', label: 'Nr.', mono: true, nowrap: true }, { key: 'client', label: 'Klienti', render: r => <div><div style={{ fontWeight: 600 }}>{r.client}</div><div style={{ color: 'var(--text-subtle)', fontSize: 12 }}>{r.subject}</div></div> }, { key: 'car', label: 'Makina' }, { key: 'from', label: 'Periudha', mono: true, nowrap: true, render: r => r.from + ' – ' + r.to }, { key: 'days', label: 'Ditë', align: 'right', mono: true }, { key: 'total', label: 'Total (ALL)', align: 'right', mono: true, render: r => window.RR_FMT(r.total) }, { key: 'paid', label: 'Paguar', align: 'right', render: r => <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: r.paid < r.total ? 'var(--color-warning)' : 'var(--color-success)' }}>{window.RR_FMT(r.paid)}</span> }, { key: 'status', label: 'Statusi', render: r => <Badge tone={window.RR_TONE(r.status)} status={r.status}>{r.label}</Badge> }]} />
        : <EmptyState icon="file-search" title="Asnjë kontratë" description="Provo një filtër tjetër ose krijo një kontratë të re." action={<Button size="sm" icon="plus" onClick={onNew}>Kontratë e re</Button>} />}
    </Card>
  </>;
}
Object.assign(window, { Contracts });
