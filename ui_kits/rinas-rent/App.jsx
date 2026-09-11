const { Button, Toast } = window.RinasRentDesignSystem_a23b91;
const TITLES = { dashboard: ['Paneli', 'Mirë se vini · 11 Shtator 2026'], calendar: ['Kalendari i prenotimeve', 'Operacione'], contracts: ['Kontratat', 'Operacione'], payments: ['Pagesat me afat', 'Operacione'], cars: ['Mjetet', 'Operacione · Regjistri i mjeteve dhe skadencat'], subjects: ['Subjektet', 'Administrim'], notifications: ['Njoftimet', 'Cilësime · email për skadencat'] };
function App() {
  const saved = (() => { try { return JSON.parse(localStorage.getItem('rr-kit') || '{}'); } catch (e) { return {}; } })();
  const [page, setPage] = React.useState(saved.page || 'login');
  const [role, setRole] = React.useState(saved.role || 'subject');
  const [contract, setContract] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => { localStorage.setItem('rr-kit', JSON.stringify({ page, role })); }, [page, role]);
  React.useEffect(() => { if (toast) { const t = setTimeout(() => setToast(null), 3500); return () => clearTimeout(t); } }, [toast]);
  const openContract = c => { setContract(c); setPage('contract'); };
  if (page === 'login') return <Login onLogin={r => { setRole(r); setPage('dashboard'); }} />;
  if (page === 'print') return <PrintContract contract={contract} onBack={() => setPage('contract')} />;
  const isContract = page === 'contract';
  const [title, bc] = isContract ? [contract ? contract.nr : 'Kontratë e re', 'Kontratat'] : TITLES[page] || ['', ''];
  const actions = page === 'calendar' || page === 'contracts' || page === 'dashboard' ? <Button variant="accent" icon="plus" onClick={() => openContract(null)}>Prenotim i ri</Button> : null;
  return <>
    <Shell page={isContract ? 'contracts' : page} setPage={p => { setPage(p); }} title={title} breadcrumb={bc} actions={actions} role={role}>
      {page === 'dashboard' && <Dashboard go={setPage} openContract={openContract} />}
      {page === 'calendar' && <Calendar onNew={() => openContract(null)} />}
      {page === 'contracts' && <Contracts openContract={openContract} onNew={() => openContract(null)} />}
      {isContract && <ContractForm contract={contract} onSave={() => { setToast({ tone: 'success', title: 'Kontrata u ruajt', message: (contract ? contract.nr : 'KTR-2026-0149') + ' · ruajtur në sistem', action: contract && { label: 'Printo', onClick: () => setPage('print') } }); if (!contract) { setContract(window.RR_DATA.contracts[0]); } }} onPrint={() => setPage('print')} onPay={() => setPage('payments')} />}
      {page === 'payments' && <Payments toast={setToast} />}
      {page === 'cars' && <Cars toast={setToast} />}
      {page === 'subjects' && <Subjects toast={setToast} />}
      {page === 'notifications' && <Notifications toast={setToast} />}
    </Shell>
    {toast && <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 200 }}><Toast {...toast} onClose={() => setToast(null)} /></div>}
  </>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
