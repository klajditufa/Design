const { Button, Card, Badge, Switch, Checkbox, Field, Input, Select, DataTable, Tag } = window.RinasRentDesignSystem_a23b91;
function Notifications({ toast }) {
  const [emails, setEmails] = React.useState(['info@rinascars.al', 'klajdi@rinascars.al']);
  const log = [
    { id: 1, date: '11.09.2026 08:00', to: 'info@rinascars.al', subject: 'Kolaudimi skadon në 24 ditë — Toyota Yaris AA 123 BB', status: 'active', label: 'Dërguar' },
    { id: 2, date: '09.09.2026 08:00', to: 'info@rinascars.al', subject: 'Kasko skadon në 19 ditë — Toyota Yaris AA 123 BB', status: 'active', label: 'Dërguar' },
    { id: 3, date: '02.09.2026 08:00', to: 'info@rinascars.al', subject: 'Kolaudimi ka skaduar — Dacia Duster AA 789 EF', status: 'overdue', label: 'Dërguar · pa veprim' },
    { id: 4, date: '31.08.2026 08:00', to: 'info@rinascars.al', subject: 'Siguracioni skadon në 30 ditë — VW Golf 8 AB 456 CD', status: 'active', label: 'Dërguar' },
  ];
  return <>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,3fr) minmax(0,2fr)', gap: 20, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Card title="Njoftime me email" subtitle="Për skadencat e mjeteve (kolaudim, siguracion, kasko, taksë)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Switch label="Dërgo njoftime me email" defaultChecked />
            <div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 8 }}>Kur të dërgohet</div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}><Checkbox label="30 ditë përpara" defaultChecked /><Checkbox label="7 ditë përpara" defaultChecked /><Checkbox label="Ditën e skadencës" defaultChecked /><Checkbox label="Çdo javë pas skadimit" /></div>
            </div>
            <Field label="Ora e dërgimit"><Select style={{ maxWidth: 160 }} defaultValue="08:00" options={['06:00', '08:00', '10:00', '18:00']} /></Field>
            <div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 8 }}>Marrësit</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>{emails.map(e => <Tag key={e} onRemove={() => setEmails(emails.filter(x => x !== e))}>{e}</Tag>)}</div>
              <div style={{ display: 'flex', gap: 8, maxWidth: 420 }}><Input icon="mail" placeholder="email@subjekt.al" id="newmail" /><Button variant="secondary" onClick={() => { const el = document.getElementById('newmail'); if (el.value) { setEmails([...emails, el.value]); el.value = ''; } }}>Shto</Button></div>
            </div>
            <Checkbox label="Dërgo kopje edhe administratorit të Rinas" />
          </div>
        </Card>
        <Card title="Historiku i dërgimeve" padding={0}>
          <DataTable dense rows={log} columns={[{ key: 'date', label: 'Data', mono: true, nowrap: true }, { key: 'subject', label: 'Subjekti i emailit' }, { key: 'to', label: 'Për', mono: true }, { key: 'status', label: '', render: r => <Badge tone={window.RR_TONE(r.status)} status={r.status}>{r.label}</Badge> }]} />
        </Card>
      </div>
      <Card title="Pamja e emailit" subtitle="Kështu duket njoftimi që merr subjekti" padding={0} actions={<Button size="sm" variant="secondary" icon="send" onClick={() => toast({ tone: 'success', title: 'Email testues u dërgua', message: emails[0] })}>Dërgo test</Button>}>
        <iframe title="Email" src="emails/Njoftim-Skadence.html" style={{ width: '100%', height: 720, border: 0, display: 'block', background: '#eef0f4' }} />
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Button icon="save" onClick={() => toast({ tone: 'success', title: 'Cilësimet u ruajtën' })}>Ruaj cilësimet</Button></div>
  </>;
}
Object.assign(window, { Notifications });
