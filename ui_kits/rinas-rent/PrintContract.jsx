const { Button } = window.RinasRentDesignSystem_a23b91;
function PrintContract({ contract, onBack }) {
  const c = contract; const inst = window.RR_DATA.installments.filter(i => i.ktr === c.nr);
  const row = (k, v) => <div style={{ display: 'flex', gap: 12, padding: '6px 0', borderBottom: '1px solid var(--border-default)', fontSize: 13 }}><span style={{ width: 160, color: 'var(--text-muted)' }}>{k}</span><span style={{ fontWeight: 500 }}>{v}</span></div>;
  return <div style={{ minHeight: '100vh', background: 'var(--gray-200)', padding: 24 }}>
    <div style={{ maxWidth: 794, margin: '0 auto', display: 'flex', gap: 8, marginBottom: 16 }}><Button variant="secondary" icon="arrow-left" onClick={onBack}>Kthehu</Button><Button icon="printer" onClick={() => window.print()} style={{ marginLeft: 'auto' }}>Printo / Ruaj PDF</Button></div>
    <article style={{ width: 794, minHeight: 1000, margin: '0 auto', background: '#fff', boxShadow: 'var(--shadow-lg)', padding: '56px 64px', boxSizing: 'border-box', color: 'var(--text-body)' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid var(--navy-900)', paddingBottom: 16 }}>
        <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--navy-900)' }}>{c.subject}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Aeroporti Ndërkombëtar i Tiranës, Rinas · NIPT L81234567A</div></div>
        <div style={{ textAlign: 'right' }}><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>KONTRATË QIRAJE</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{c.nr}</div></div>
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 24 }}>
        <section><h3 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-subtle)', marginBottom: 6 }}>Qiramarrësi</h3>{row('Emër Mbiemër', c.client)}{row('Nr. dokumenti', c.doc)}{row('Telefon', '+355 69 000 0000')}</section>
        <section><h3 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-subtle)', marginBottom: 6 }}>Mjeti</h3>{row('Makina', c.car)}{row('Marrja', c.from + ' 09:00')}{row('Kthimi', c.to + ' 09:00')}{row('Ditë', c.days)}</section>
      </div>
      <section style={{ marginTop: 24 }}><h3 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-subtle)', marginBottom: 6 }}>Pagesa</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}><thead><tr>{['Kësti', 'Afati', 'Shuma (ALL)', 'Statusi'].map(h => <th key={h} style={{ textAlign: h.startsWith('Shuma') ? 'right' : 'left', padding: '6px 0', borderBottom: '1px solid var(--border-strong)', fontSize: 11, textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{h}</th>)}</tr></thead>
        <tbody>{(inst.length ? inst : [{ id: 0, nr: '1/1', due: c.from, amount: c.total, label: 'Paguar' }]).map(i => <tr key={i.id}><td style={{ padding: '6px 0', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-mono)' }}>{i.nr}</td><td style={{ padding: '6px 0', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-mono)' }}>{i.due}</td><td style={{ padding: '6px 0', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-mono)', textAlign: 'right' }}>{window.RR_FMT(i.amount)}</td><td style={{ padding: '6px 0', borderBottom: '1px solid var(--border-default)' }}>{i.label}</td></tr>)}
        <tr><td colSpan={2} style={{ padding: '10px 0', fontWeight: 600 }}>Totali</td><td style={{ padding: '10px 0', textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{window.RR_FMT(c.total)}</td><td /></tr></tbody></table>
      </section>
      <section style={{ marginTop: 24, fontSize: 11.5, color: 'var(--text-muted)', lineHeight: 1.5 }}><h3 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-subtle)', marginBottom: 6 }}>Kushtet</h3><p style={{ margin: 0 }}>1. Qiramarrësi merr përsipër përdorimin e mjetit sipas ligjeve në fuqi. 2. Karburanti kthehet në të njëjtin nivel. 3. Vonesa në kthim faturohet me çmimin ditor. 4. Depozita 20.000 ALL kthehet pas kontrollit të mjetit. 5. Kontrata ruhet elektronikisht në sistemin RinasRent.</p></section>
      <footer style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 56 }}>{['Qiradhënësi', 'Qiramarrësi'].map(s => <div key={s} style={{ borderTop: '1px solid var(--gray-800)', paddingTop: 6, fontSize: 12, color: 'var(--text-muted)' }}>{s} · nënshkrimi</div>)}</footer>
    </article>
  </div>;
}
Object.assign(window, { PrintContract });
