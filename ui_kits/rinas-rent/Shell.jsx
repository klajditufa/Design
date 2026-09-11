const { SidebarNav, Topbar, IconButton, Button, Tooltip } = window.RinasRentDesignSystem_a23b91;
function Shell({ page, setPage, title, breadcrumb, actions, role, children }) {
  const items = [{ section: 'Operacione' }, { value: 'dashboard', label: 'Paneli', icon: 'layout-dashboard' }, { value: 'calendar', label: 'Kalendari', icon: 'calendar-days' }, { value: 'contracts', label: 'Kontratat', icon: 'file-text' }, { value: 'payments', label: 'Pagesat', icon: 'credit-card', count: 1 }, { value: 'cars', label: 'Mjetet', icon: 'car', count: window.RR_ALERTS().length || undefined }, { section: 'Cilësime' }, { value: 'notifications', label: 'Njoftimet', icon: 'mail' }];
  if (role === 'admin') items.push({ section: 'Administrim' }, { value: 'subjects', label: 'Subjektet', icon: 'building-2' });
  return <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface-page)' }}>
    <SidebarNav brand={<span>Rinas<span style={{ color: 'var(--amber-400)' }}>Rent</span></span>} value={page} onChange={setPage} items={items} style={{ position: 'sticky', top: 0, height: '100vh' }}
      footer={<div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px', borderTop: '1px solid oklch(100% 0 0 / 0.1)' }}><span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--navy-600)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700 }}>{role === 'admin' ? 'AD' : 'RC'}</span><div style={{ minWidth: 0, flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{role === 'admin' ? 'Administratori' : 'Rinas Cars sh.p.k.'}</div><div style={{ fontSize: 11, color: 'var(--text-on-dark-muted)' }}>{role === 'admin' ? 'Rinas · të gjitha subjektet' : 'Subjekt · Rinas'}</div></div><IconButton icon="log-out" label="Dil" variant="dark" size="sm" onClick={() => setPage('login')} /></div>} />
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <Topbar title={title} breadcrumb={breadcrumb} actions={<>{actions}<Tooltip content="Njoftime"><IconButton icon="bell" label="Njoftime" variant="outline" /></Tooltip></>} style={{ position: 'sticky', top: 0, zIndex: 10 }} />
      <main style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 'var(--content-max)', width: '100%', boxSizing: 'border-box' }}>{children}</main>
    </div>
  </div>;
}
Object.assign(window, { Shell });
