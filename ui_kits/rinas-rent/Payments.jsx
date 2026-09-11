const { Button, Card, Badge, DataTable, StatCard, Dialog, Field, Input, Select } = window.RinasRentDesignSystem_a23b91;
function Payments({ toast }) {
  const D = window.RR_DATA; const [open, setOpen] = React.useState(null);
  return <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
      <StatCard label="Për arkëtim · Shtator" value={window.RR_FMT(46800) + ' ALL'} icon="wallet" /><StatCard label="Në vonesë" value={window.RR_FMT(10400) + ' ALL'} delta="1 këst · 8 ditë" deltaTone="down" icon="alert-triangle" /><StatCard label="Arkëtuar · Shtator" value={window.RR_FMT(139600) + ' ALL'} deltaTone="up" delta="+12% nga gushti" icon="banknote" />
    </div>
    <Card title="Këstet" subtitle="Të gjitha kontratat me pagesë me afat" padding={0}>
      <DataTable rows={D.installments} columns={[{ key: 'ktr', label: 'Kontrata', mono: true, nowrap: true }, { key: 'client', label: 'Klienti' }, { key: 'nr', label: 'Kësti', mono: true }, { key: 'due', label: 'Afati', mono: true }, { key: 'amount', label: 'Shuma (ALL)', align: 'right', mono: true, render: r => window.RR_FMT(r.amount) }, { key: 'status', label: 'Statusi', render: r => <Badge tone={window.RR_TONE(r.status)} status={r.status}>{r.label}</Badge> }, { key: 'a', label: '', align: 'right', render: r => r.status !== 'done' && <Button size="sm" variant={r.status === 'overdue' ? 'primary' : 'secondary'} onClick={() => setOpen(r)}>Arkëto</Button> }]} />
    </Card>
    <Dialog open={!!open} title="Regjistro pagesë" onClose={() => setOpen(null)} footer={<><Button variant="secondary" onClick={() => setOpen(null)}>Anulo</Button><Button icon="check" onClick={() => { setOpen(null); toast({ tone: 'success', title: 'Pagesa u regjistrua', message: open.ktr + ' · kësti ' + open.nr }); }}>Ruaj pagesën</Button></>}>
      {open && <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ gridColumn: '1 / -1', padding: 12, background: 'var(--surface-sunken)', borderRadius: 4, fontSize: 'var(--text-sm)' }}><b>{open.client}</b> · {open.ktr} · kësti {open.nr} · afati <span style={{ fontFamily: 'var(--font-mono)' }}>{open.due}</span></div>
        <Field label="Shuma" required><Input mono suffix="ALL" defaultValue={window.RR_FMT(open.amount)} /></Field>
        <Field label="Data"><Input mono icon="calendar" defaultValue="11.09.2026" /></Field>
        <Field label="Mënyra"><Select options={['Cash', 'Kartë', 'Transfertë bankare']} /></Field>
        <Field label="Referenca"><Input mono placeholder="opsionale" /></Field>
      </div>}
    </Dialog>
  </>;
}
Object.assign(window, { Payments });
