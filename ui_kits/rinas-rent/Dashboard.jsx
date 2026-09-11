const { Button, Card, Badge, DataTable, StatCard, CalendarGrid, Icon } = window.RinasRentDesignSystem_a23b91;
function Dashboard({ go, openContract }) {
  const D = window.RR_DATA;
  return <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}>
      <StatCard label="Makina jashtë sot" value="3 / 5" icon="car" />
      <StatCard label="Prenotime këtë muaj" value="12" delta="+3 nga gushti" deltaTone="up" icon="calendar-days" />
      <StatCard label="Të ardhura · Shtator" value={window.RR_FMT(139600) + ' ALL'} icon="banknote" />
      <StatCard label="Këste në vonesë" value="1" delta="10.400 ALL" deltaTone="down" icon="alert-triangle" />
    </div>
    {window.RR_ALERTS().length > 0 && <Card title="Skadenca të afërta" subtitle="Kolaudim, siguracion, kasko — njoftim 30 ditë përpara" actions={<Button size="sm" variant="ghost" iconRight="arrow-right" onClick={() => go('cars')}>Regjistri i mjeteve</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 10 }}>{window.RR_ALERTS().map(a => { const e = window.RR_EXP(a.date); return <div key={a.id} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '10px 12px', border: '1px solid var(--border-default)', borderRadius: 4, fontSize: 'var(--text-sm)' }}><Icon name={a.days < 0 ? 'alert-triangle' : 'bell'} size={16} color={a.days < 0 ? 'var(--color-danger)' : 'var(--color-warning)'} /><div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 600 }}>{a.car.name} <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 400, color: 'var(--text-muted)' }}>{a.car.plate}</span></div><div style={{ color: 'var(--text-muted)' }}>{a.doc} · {window.RR_DATE(a.date)}</div></div><Badge tone={e.tone} status={e.status}>{a.days < 0 ? 'Skaduar' : a.days + ' ditë'}</Badge></div>; })}</div>
    </Card>}
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,3fr) minmax(0,2fr)', gap: 20 }}>
      <Card title="Kontratat e fundit" actions={<Button size="sm" variant="ghost" iconRight="arrow-right" onClick={() => go('contracts')}>Të gjitha</Button>} padding={0}>
        <DataTable dense onRowClick={openContract} rows={D.contracts.slice(0, 4)} columns={[{ key: 'nr', label: 'Nr.', mono: true, nowrap: true }, { key: 'client', label: 'Klienti' }, { key: 'car', label: 'Makina' }, { key: 'total', label: 'Total', align: 'right', mono: true, render: r => window.RR_FMT(r.total) }, { key: 'status', label: 'Statusi', render: r => <Badge tone={window.RR_TONE(r.status)} status={r.status}>{r.label}</Badge> }]} />
      </Card>
      <Card title="Sot · 11 Shtator" subtitle="Dorëzime dhe kthime">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[['09:00', 'Dorëzim', 'VW Golf 8 · AB 456 CD', 'Elda Meta', 'reserved'], ['14:30', 'Kthim', 'Toyota Yaris · AA 123 BB', 'Arben Hoxha', 'active'], ['—', 'Kthim i vonuar', 'Dacia Duster · AA 789 EF', 'Gent Krasniqi', 'overdue']].map(([t, k, c, n, s]) => <div key={c} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 'var(--text-sm)' }}><span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)', width: 44 }}>{t}</span><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--status-' + s + ')' }} /><div style={{ flex: 1, minWidth: 0 }}><div style={{ fontWeight: 600 }}>{k} · {n}</div><div style={{ color: 'var(--text-muted)' }}>{c}</div></div></div>)}
        </div>
      </Card>
    </div>
    <Card title="Shtator 2026" actions={<Button size="sm" variant="ghost" iconRight="arrow-right" onClick={() => go('calendar')}>Kalendari</Button>} padding={0}><CalendarGrid year={2026} month={9} today={11} events={D.events.filter(e => e.y === 2026 && e.m === 9)} style={{ border: 0, borderRadius: 0 }} /></Card>
  </>;
}
Object.assign(window, { Dashboard });
