const { Button, IconButton, Card, Badge, DataTable, Input, Tag, Tabs, Dialog, Field, Select, Switch, StatCard, Icon } = window.RinasRentDesignSystem_a23b91;
function ExpiryCell({ iso }) { const e = window.RR_EXP(iso); return <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start' }}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: e.status === 'overdue' ? 'var(--color-danger)' : e.status === 'reserved' ? 'var(--color-warning)' : 'var(--text-body)', fontWeight: e.status === 'active' ? 400 : 600 }}>{window.RR_DATE(iso)}</span>{e.status !== 'active' && <Badge tone={e.tone} status={e.status}>{e.label}</Badge>}</div>; }
function CarForm({ car }) {
  const c = car || {};
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
    <Field label="Marka dhe modeli" required><Input defaultValue={c.name} placeholder="Toyota Yaris" /></Field>
    <Field label="Targa" required><Input mono defaultValue={c.plate} placeholder="AA 123 BB" /></Field>
    <Field label="Numri i shasisë (VIN)"><Input mono defaultValue={c.vin} placeholder="17 karaktere" /></Field>
    <Field label="Viti"><Input mono defaultValue={c.year} placeholder="2024" /></Field>
    <Field label="Klasa"><Select defaultValue={c.cls} options={['Ekonomike', 'Kompakte', 'SUV', 'Premium', 'Furgon']} /></Field>
    <Field label="Çmimi ditor"><Input mono suffix="ALL" defaultValue={c.price} /></Field>
    <Field label="Kilometrazhi"><Input mono suffix="km" defaultValue={c.km} /></Field>
    <Field label="Statusi"><Select defaultValue="Në park" options={['Në park', 'Në servis', 'Jashtë përdorimit']} /></Field>
    <div style={{ gridColumn: '1 / -1', paddingTop: 8, borderTop: '1px solid var(--border-default)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Skadencat · njoftim 30 ditë përpara</div>
    {window.RR_DOCS.map(([k, l]) => <Field key={k} label={l} hint={c[k] ? window.RR_EXP(c[k]).label : 'Opsionale'}><Input mono icon="calendar" defaultValue={window.RR_DATE(c[k]) === '—' ? '' : window.RR_DATE(c[k])} placeholder="dd.mm.vvvv" /></Field>)}
    <div style={{ gridColumn: '1 / -1' }}><Switch label="Njofto me email dhe në panel 30 ditë para çdo skadence" defaultChecked /></div>
  </div>;
}
function Cars({ toast }) {
  const D = window.RR_DATA; const alerts = window.RR_ALERTS();
  const [tab, setTab] = React.useState('all'); const [edit, setEdit] = React.useState(undefined); const [cls, setCls] = React.useState('Të gjitha'); const [q, setQ] = React.useState('');
  const soon = c => window.RR_DOCS.some(([k]) => { const n = window.RR_DAYS(c[k]); return n !== null && n <= 30; });
  const rows = D.cars.filter(c => (tab === 'all' || soon(c)) && (cls === 'Të gjitha' || c.cls === cls) && (c.name + c.plate + c.vin).toLowerCase().includes(q.toLowerCase()));
  const overdue = alerts.filter(a => a.days < 0).length;
  return <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
      <StatCard label="Mjete të regjistruara" value={D.cars.length} icon="car" />
      <StatCard label="Skadenca brenda 30 ditëve" value={alerts.length - overdue} delta="kolaudim, siguracion, kasko" icon="bell-ring" />
      <StatCard label="Dokumente të skaduara" value={overdue} delta={overdue ? 'Mjeti nuk duhet dhënë me qera' : 'Asnjë'} deltaTone={overdue ? 'down' : 'up'} icon="alert-triangle" />
    </div>
    {alerts.length > 0 && <Card title="Njoftime skadencash" subtitle="Dërguar automatikisht 30 ditë para afatit" padding={0}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{alerts.map((a, i) => <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', borderTop: i ? '1px solid var(--border-default)' : 0, fontSize: 'var(--text-sm)' }}>
        <Icon name={a.days < 0 ? 'alert-triangle' : 'bell'} size={16} color={a.days < 0 ? 'var(--color-danger)' : 'var(--color-warning)'} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, width: 90 }}>{a.car.plate}</span><span style={{ fontWeight: 600, width: 140 }}>{a.car.name}</span><span style={{ color: 'var(--text-muted)', flex: 1 }}>{a.doc} · <span style={{ fontFamily: 'var(--font-mono)' }}>{window.RR_DATE(a.date)}</span></span>
        <Badge tone={window.RR_EXP(a.date).tone} status={window.RR_EXP(a.date).status}>{window.RR_EXP(a.date).label}</Badge>
        <Button size="sm" variant="ghost" icon="pencil" onClick={() => setEdit(a.car)}>Përditëso</Button>
      </div>)}</div>
    </Card>}
    <Tabs value={tab} onChange={setTab} items={[{ value: 'all', label: 'Të gjitha mjetet', count: D.cars.length }, { value: 'soon', label: 'Me skadenca', icon: 'bell', count: D.cars.filter(soon).length }]} />
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}><Input icon="search" placeholder="Kërko model, targë, VIN…" value={q} onChange={e => setQ(e.target.value)} style={{ maxWidth: 320 }} /><div style={{ display: 'flex', gap: 8 }}>{['Të gjitha', 'Ekonomike', 'Kompakte', 'SUV', 'Premium'].map(c => <Tag key={c} selected={cls === c} onClick={() => setCls(c)}>{c}</Tag>)}</div><Button icon="plus" style={{ marginLeft: 'auto' }} onClick={() => setEdit(null)}>Regjistro mjet</Button></div>
    <Card padding={0}><DataTable rows={rows} onRowClick={setEdit} columns={[{ key: 'name', label: 'Mjeti', render: r => <div><div style={{ fontWeight: 600 }}>{r.name} <span style={{ color: 'var(--text-subtle)', fontWeight: 400 }}>· {r.year}</span></div><div style={{ color: 'var(--text-subtle)', fontSize: 12, fontFamily: 'var(--font-mono)' }}>{r.vin}</div></div> }, { key: 'plate', label: 'Targa', mono: true, nowrap: true }, { key: 'cls', label: 'Klasa' }, { key: 'km', label: 'Km', align: 'right', mono: true, render: r => window.RR_FMT(r.km) }, { key: 'kolaudim', label: 'Kolaudimi', render: r => <ExpiryCell iso={r.kolaudim} /> }, { key: 'siguracion', label: 'Siguracioni', render: r => <ExpiryCell iso={r.siguracion} /> }, { key: 'kasko', label: 'Kasko', render: r => <ExpiryCell iso={r.kasko} /> }, { key: 'taksa', label: 'Taksa', render: r => <ExpiryCell iso={r.taksa} /> }, { key: 'a', label: '', align: 'right', render: r => <IconButton icon="pencil" label="Ndrysho" size="sm" onClick={e => { e.stopPropagation(); setEdit(r); }} /> }]} /></Card>
    <Dialog open={edit !== undefined} width={640} title={edit ? edit.name + ' · ' + edit.plate : 'Regjistro mjet të ri'} onClose={() => setEdit(undefined)} footer={<><Button variant="secondary" onClick={() => setEdit(undefined)}>Anulo</Button><Button icon="save" onClick={() => { setEdit(undefined); toast && toast({ tone: 'success', title: edit ? 'Mjeti u përditësua' : 'Mjeti u regjistrua', message: edit ? edit.plate : 'Skadencat do të njoftohen 30 ditë përpara' }); }}>Ruaj</Button></>}>{edit !== undefined && <CarForm car={edit} />}</Dialog>
  </>;
}
Object.assign(window, { Cars });
