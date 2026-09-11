const { Button, Field, Input, Checkbox, Radio } = window.RinasRentDesignSystem_a23b91;
function Login({ onLogin }) {
  const [role, setRole] = React.useState('subject');
  return <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)' }}>
    <div style={{ background: 'var(--surface-sidebar)', color: 'var(--text-on-dark)', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.01em' }}>Rinas<span style={{ color: 'var(--amber-400)' }}>Rent</span></div>
      <div><h1 style={{ color: '#fff', fontSize: 'var(--text-3xl)', fontWeight: 600, maxWidth: 420 }}>Prenotime, kontrata dhe pagesa në një vend.</h1><p style={{ color: 'var(--navy-200)', maxWidth: 420, fontSize: 'var(--text-md)', marginTop: 16 }}>Për të gjitha subjektet e makinave me qera në Rinas. Çdo kontratë plotësohet online, ruhet dhe printohet.</p></div>
      <div style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>© 2026 RinasRent</div>
    </div>
    <div style={{ display: 'grid', placeItems: 'center', padding: 48 }}>
      <form onSubmit={e => { e.preventDefault(); onLogin(role); }} style={{ width: '100%', maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div><h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 600 }}>Hyr në llogari</h2><p style={{ margin: '6px 0 0', color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>Llogaritë hapen nga administratori i Rinas.</p></div>
        <Field label="Përdoruesi"><Input icon="user" defaultValue={role === 'admin' ? 'admin' : 'rinascars'} /></Field>
        <Field label="Fjalëkalimi"><Input icon="lock" type="password" defaultValue="••••••••" /></Field>
        <Field label="Roli (demo)"><Radio inline value={role} onChange={setRole} options={[{ value: 'subject', label: 'Subjekt' }, { value: 'admin', label: 'Administrator' }]} /></Field>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><Checkbox label="Më mbaj të lidhur" defaultChecked /><a href="#" style={{ fontSize: 'var(--text-sm)' }}>Harrove fjalëkalimin?</a></div>
        <Button type="submit" size="lg" fullWidth iconRight="arrow-right">Hyr</Button>
      </form>
    </div>
  </div>;
}
Object.assign(window, { Login });
