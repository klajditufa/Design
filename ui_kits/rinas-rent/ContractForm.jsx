const { Button, Card, Badge, Field, Input, Select, Checkbox, Radio, Tabs, DataTable, Icon } = window.RinasRentDesignSystem_a23b91;
function ContractForm({ contract, onSave, onPrint, onPay }) {
  const c = contract || { nr: 'KTR-2026-0149', client: '', doc: '', car: '', from: '', to: '', days: 0, total: 0, paid: 0, plan: 1, status: 'reserved', label: 'Draft' };
  const [tab, setTab] = React.useState('k');
  const [plan, setPlan] = React.useState(String(c.plan));
  const isNew = !contract;
  const inst = window.RR_DATA.installments.filter(i => i.ktr === c.nr);
  return <>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <Badge tone={window.RR_TONE(c.status)} status={c.status}>{c.label}</Badge>
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{isNew ? 'Kontrata krijohet dhe ruhet në sistem; mund të printohet pas ruajtjes.' : 'Krijuar 09.09.2026 · Subjekti ' + c.subject}</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>{!isNew && <Button variant="secondary" icon="printer" onClick={onPrint}>Printo</Button>}<Button icon="save" onClick={onSave}>{isNew ? 'Ruaj kontratën' : 'Ruaj ndryshimet'}</Button></div>
    </div>
    <Tabs value={tab} onChange={setTab} items={[{ value: 'k', label: 'Kontrata', icon: 'file-text' }, { value: 'p', label: 'Pagesat', icon: 'credit-card', count: inst.length || undefined }, { value: 'd', label: 'Dokumente', icon: 'paperclip' }]} />
    {tab === 'k' && <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)', gap: 20, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Card title="Qiramarrësi"><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Field label="Emër Mbiemër" required><Input defaultValue={c.client} placeholder="Emër Mbiemër" /></Field>
          <Field label="Nr. dokumenti (ID / Pasaportë)" required><Input mono defaultValue={c.doc} placeholder="J12345678K" /></Field>
          <Field label="Patentë"><Input mono placeholder="AL-1234567" /></Field>
          <Field label="Telefon"><Input icon="phone" placeholder="+355 69 000 0000" /></Field>
          <Field label="Adresa" style={{ gridColumn: '1 / -1' }}><Input placeholder="Rruga, Qyteti, Shteti" /></Field>
        </div></Card>
        <Card title="Mjeti dhe periudha"><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Field label="Makina" required style={{ gridColumn: '1 / -1' }}><Select defaultValue={c.car} placeholder="Zgjidh makinën" options={window.RR_DATA.cars.map(x => x.name + ' · ' + x.plate)} /></Field>
          <Field label="Marrja" required><Input icon="calendar" mono defaultValue={c.from} placeholder="dd.mm.vvvv  hh:mm" /></Field>
          <Field label="Kthimi" required><Input icon="calendar" mono defaultValue={c.to} placeholder="dd.mm.vvvv  hh:mm" /></Field>
          <Field label="Vendi i marrjes"><Select options={['Aeroporti Rinas · Terminali', 'Zyra Tiranë', 'Adresë tjetër']} /></Field>
          <Field label="Km në dorëzim"><Input mono suffix="km" placeholder="0" /></Field>
          <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 24, flexWrap: 'wrap' }}><Checkbox label="Sigurim i plotë (CDW)" defaultChecked /><Checkbox label="Shofer i dytë" /><Checkbox label="Sedilje fëmijësh" /><Checkbox label="GPS" /></div>
        </div></Card>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Card title="Përmbledhje" subtitle={c.nr}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 'var(--text-sm)' }}>
            {[['Ditë', c.days || '—'], ['Çmimi ditor', c.days ? window.RR_FMT(c.total / c.days) + ' ALL' : '—'], ['Depozitë', '20.000 ALL']].map(([k, v]) => <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>{k}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{v}</span></div>)}
            <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><span style={{ fontWeight: 600 }}>Totali</span><span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600 }}>{window.RR_FMT(c.total)} <span style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>ALL</span></span></div>
          </div>
        </Card>
        <Card title="Plani i pagesës">
          <Radio value={plan} onChange={setPlan} options={[{ value: '1', label: 'Pagesë e plotë', hint: 'në marrje' }, { value: '2', label: '2 këste', hint: '50% + 50%' }, { value: '3', label: '3 këste', hint: 'çdo 30 ditë' }]} />
          <div style={{ marginTop: 14, padding: 12, background: 'var(--surface-sunken)', borderRadius: 4, fontSize: 'var(--text-sm)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {Array.from({ length: +plan }).map((_, i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Kësti {i + 1}/{plan}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{c.total ? window.RR_FMT(Math.round(c.total / +plan)) : '—'} ALL</span></div>)}
          </div>
        </Card>
        <Card flat><Checkbox label={<span style={{ fontSize: 'var(--text-sm)' }}>Qiramarrësi pranon kushtet e përgjithshme të kontratës.</span>} defaultChecked={!isNew} /></Card>
      </div>
    </div>}
    {tab === 'p' && <Card title="Këstet" actions={<Button size="sm" icon="plus" onClick={onPay}>Regjistro pagesë</Button>} padding={0}>
      {inst.length ? <DataTable rows={inst} columns={[{ key: 'nr', label: 'Kësti', mono: true }, { key: 'due', label: 'Afati', mono: true }, { key: 'amount', label: 'Shuma (ALL)', align: 'right', mono: true, render: r => window.RR_FMT(r.amount) }, { key: 'status', label: 'Statusi', render: r => <Badge tone={window.RR_TONE(r.status)} status={r.status}>{r.label}</Badge> }]} /> : <div style={{ padding: 20, color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>Këstet krijohen pas ruajtjes së kontratës.</div>}
    </Card>}
    {tab === 'd' && <Card><div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{['Kontrata_' + c.nr + '.pdf', 'ID_qiramarresi.jpg', 'Patenta.jpg'].map(n => <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', border: '1px solid var(--border-default)', borderRadius: 4, fontSize: 'var(--text-sm)' }}><Icon name="file" size={16} color="var(--text-subtle)" /><span style={{ flex: 1, fontFamily: 'var(--font-mono)', fontSize: 13 }}>{n}</span><Button size="sm" variant="ghost" icon="download">Shkarko</Button></div>)}<Button variant="secondary" icon="upload" style={{ alignSelf: 'flex-start' }}>Ngarko dokument</Button></div></Card>}
  </>;
}
Object.assign(window, { ContractForm });
