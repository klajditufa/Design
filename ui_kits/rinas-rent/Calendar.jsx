const { Button, IconButton, Card, Tag, Badge, CalendarGrid, Select } = window.RinasRentDesignSystem_a23b91;
function Calendar({ onNew }) {
  const D = window.RR_DATA;
  const [cls, setCls] = React.useState('Të gjitha');
  const [day, setDay] = React.useState(null);
  const [carId, setCarId] = React.useState('');
  const [ym, setYm] = React.useState({ y: 2026, m: 9 });
  const shift = n => { setDay(null); setYm(({ y, m }) => { let mm = m + n, yy = y; if (mm < 1) { mm = 12; yy--; } if (mm > 12) { mm = 1; yy++; } return { y: yy, m: mm }; }); };
  const isToday = ym.y === 2026 && ym.m === 9;
  const monthLabel = window.RR_MONTHS[ym.m - 1] + ' ' + ym.y;
  const carById = id => D.cars.find(x => x.id === id);
  const events = D.events.filter(e => { const car = carById(e.carId); return e.y === ym.y && e.m === ym.m && (cls === 'Të gjitha' || (car && car.cls === cls)) && (!carId || String(e.carId) === carId); });
  const carOptions = D.cars.filter(x => cls === 'Të gjitha' || x.cls === cls).map(x => ({ value: String(x.id), label: x.name + ' · ' + x.plate }));
  const dayEvents = day ? events.filter(e => day >= e.from && day <= e.to) : [];
  return <>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><IconButton icon="chevron-left" label="Muaji i kaluar" variant="outline" size="sm" onClick={() => shift(-1)} /><h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, minWidth: 150, textAlign: 'center' }}>{monthLabel}</h2><IconButton icon="chevron-right" label="Muaji tjetër" variant="outline" size="sm" onClick={() => shift(1)} /></div>
      <Button size="sm" variant="secondary" disabled={isToday} onClick={() => { setDay(null); setYm({ y: 2026, m: 9 }); }}>Sot</Button>
      <div style={{ display: 'flex', gap: 8, marginLeft: 'auto', flexWrap: 'wrap' }}>{['Të gjitha', 'Ekonomike', 'Kompakte', 'SUV', 'Premium'].map(c => <Tag key={c} selected={cls === c} onClick={() => { setCls(c); setCarId(''); }}>{c}</Tag>)}</div>
      <Select size="sm" style={{ width: 220 }} value={carId} onChange={e => setCarId(e.target.value)} placeholder="Të gjitha makinat" options={carOptions} />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: day ? 'minmax(0,1fr) 300px' : '1fr', gap: 20, alignItems: 'start' }}>
      <CalendarGrid year={ym.y} month={ym.m} today={isToday ? 11 : undefined} events={events} onDayClick={setDay} />
      {day && <Card title={day + ' ' + monthLabel} subtitle={dayEvents.length + ' prenotime' + (carId || cls !== 'Të gjitha' ? ' · filtruar' : '')} actions={<IconButton icon="x" label="Mbyll" size="sm" onClick={() => setDay(null)} />}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {dayEvents.map(e => <div key={e.id} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 'var(--text-sm)' }}><span style={{ width: 4, alignSelf: 'stretch', borderRadius: 2, background: 'var(--status-' + e.status + ')' }} /><div style={{ flex: 1 }}><div style={{ fontWeight: 600 }}>{e.label}</div><div style={{ color: 'var(--text-muted)' }}>{e.from}–{e.to} {window.RR_MONTHS[ym.m - 1]}</div></div><Badge tone={window.RR_TONE(e.status)} status={e.status}>{e.status === 'active' ? 'Aktive' : e.status === 'reserved' ? 'Rezervuar' : e.status === 'overdue' ? 'Vonesë' : 'Mbyllur'}</Badge></div>)}
          {!dayEvents.length && <div style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>Asnjë prenotim.</div>}
          <Button size="sm" icon="plus" fullWidth onClick={onNew}>Prenotim për këtë ditë</Button>
        </div>
      </Card>}
    </div>
    <div style={{ display: 'flex', gap: 16, fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{[['active', 'Aktive'], ['reserved', 'Rezervuar'], ['overdue', 'Vonesë'], ['done', 'Mbyllur']].map(([s, l]) => <span key={s} style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><span style={{ width: 10, height: 10, borderRadius: 2, background: 'var(--status-' + s + ')' }} />{l}</span>)}</div>
  </>;
}
Object.assign(window, { Calendar });
