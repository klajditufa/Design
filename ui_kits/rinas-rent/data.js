window.RR_DATA = {
  cars: [
    { id: 1, name: 'Toyota Yaris', plate: 'AA 123 BB', vin: 'JTDKB20U1234567', year: 2022, cls: 'Ekonomike', price: 3500, status: 'active', km: 48200, kolaudim: '2026-10-05', siguracion: '2027-02-14', kasko: '2026-09-28', taksa: '2026-12-31' },
    { id: 2, name: 'VW Golf 8', plate: 'AB 456 CD', vin: 'WVWZZZCDZ1234567', year: 2023, cls: 'Kompakte', price: 4500, status: 'reserved', km: 31900, kolaudim: '2027-03-12', siguracion: '2026-09-30', kasko: '2026-09-30', taksa: '2026-12-31' },
    { id: 3, name: 'Dacia Duster', plate: 'AA 789 EF', vin: 'UU1HSDCVG1234567', year: 2021, cls: 'SUV', price: 5200, status: 'overdue', km: 76400, kolaudim: '2026-09-02', siguracion: '2027-01-20', kasko: null, taksa: '2026-12-31' },
    { id: 4, name: 'Mercedes C220', plate: 'AB 321 GH', vin: 'WDD2050421234567', year: 2022, cls: 'Premium', price: 9000, status: 'done', km: 39800, kolaudim: '2027-05-18', siguracion: '2027-04-02', kasko: '2027-04-02', taksa: '2026-12-31' },
    { id: 5, name: 'Hyundai i20', plate: 'AA 654 IJ', vin: 'NLHB251AAMZ12345', year: 2020, cls: 'Ekonomike', price: 3200, status: 'done', km: 91200, kolaudim: '2026-11-22', siguracion: '2026-10-08', kasko: null, taksa: '2026-12-31' },
  ],
  contracts: [
    { id: 1, nr: 'KTR-2026-0148', client: 'Arben Hoxha', doc: 'J12345678K', car: 'Toyota Yaris · AA 123 BB', from: '10.09.2026', to: '14.09.2026', days: 4, total: 14000, paid: 7000, plan: 2, status: 'active', label: 'Aktive', subject: 'Rinas Cars sh.p.k.' },
    { id: 2, nr: 'KTR-2026-0147', client: 'Elda Meta', doc: 'K98765432L', car: 'VW Golf 8 · AB 456 CD', from: '12.09.2026', to: '18.09.2026', days: 6, total: 27000, paid: 9000, plan: 3, status: 'reserved', label: 'Rezervuar', subject: 'AutoRent Tirana' },
    { id: 3, nr: 'KTR-2026-0141', client: 'Gent Krasniqi', doc: 'I11223344M', car: 'Dacia Duster · AA 789 EF', from: '03.09.2026', to: '09.09.2026', days: 6, total: 31200, paid: 10400, plan: 3, status: 'overdue', label: 'Vonesë', subject: 'Rinas Cars sh.p.k.' },
    { id: 4, nr: 'KTR-2026-0139', client: 'Mira Dervishi', doc: 'H55667788N', car: 'Mercedes C220 · AB 321 GH', from: '28.08.2026', to: '02.09.2026', days: 5, total: 45000, paid: 45000, plan: 1, status: 'done', label: 'Mbyllur', subject: 'Blue Sky Rent' },
    { id: 5, nr: 'KTR-2026-0136', client: 'Klodian Shehu', doc: 'G99887766P', car: 'Hyundai i20 · AA 654 IJ', from: '22.08.2026', to: '29.08.2026', days: 7, total: 22400, paid: 22400, plan: 2, status: 'done', label: 'Mbyllur', subject: 'AutoRent Tirana' },
  ],
  installments: [
    { id: 1, ktr: 'KTR-2026-0148', client: 'Arben Hoxha', nr: '2/2', due: '24.09.2026', amount: 7000, status: 'reserved', label: 'Në pritje' },
    { id: 2, ktr: 'KTR-2026-0147', client: 'Elda Meta', nr: '2/3', due: '12.10.2026', amount: 9000, status: 'reserved', label: 'Në pritje' },
    { id: 3, ktr: 'KTR-2026-0147', client: 'Elda Meta', nr: '3/3', due: '11.11.2026', amount: 9000, status: 'reserved', label: 'Në pritje' },
    { id: 4, ktr: 'KTR-2026-0141', client: 'Gent Krasniqi', nr: '2/3', due: '03.09.2026', amount: 10400, status: 'overdue', label: 'Vonesë 8 ditë' },
    { id: 5, ktr: 'KTR-2026-0141', client: 'Gent Krasniqi', nr: '3/3', due: '03.10.2026', amount: 10400, status: 'reserved', label: 'Në pritje' },
    { id: 6, ktr: 'KTR-2026-0139', client: 'Mira Dervishi', nr: '1/1', due: '28.08.2026', amount: 45000, status: 'done', label: 'Paguar' },
  ],
  subjects: [
    { id: 1, name: 'Rinas Cars sh.p.k.', nipt: 'L81234567A', user: 'rinascars', cars: 8, contracts: 42, active: true },
    { id: 2, name: 'AutoRent Tirana', nipt: 'M02345678B', user: 'autorent', cars: 6, contracts: 31, active: true },
    { id: 3, name: 'Blue Sky Rent', nipt: 'K93456789C', user: 'bluesky', cars: 5, contracts: 19, active: true },
    { id: 4, name: 'Albania Drive', nipt: 'L74567890D', user: 'aldrive', cars: 3, contracts: 4, active: false },
  ],
  events: [
    { id: 1, carId: 1, y: 2026, m: 9, label: 'Yaris · A. Hoxha', from: 10, to: 14, status: 'active' },
    { id: 2, carId: 2, y: 2026, m: 9, label: 'Golf · E. Meta', from: 12, to: 18, status: 'reserved' },
    { id: 3, carId: 3, y: 2026, m: 9, label: 'Duster · G. Krasniqi', from: 3, to: 9, status: 'overdue' },
    { id: 4, carId: 4, y: 2026, m: 9, label: 'C220 · M. Dervishi', from: 1, to: 2, status: 'done' },
    { id: 5, carId: 5, y: 2026, m: 9, label: 'i20 · B. Rama', from: 20, to: 25, status: 'reserved' },
    { id: 6, carId: 1, y: 2026, m: 9, label: 'Yaris · L. Kola', from: 16, to: 19, status: 'reserved' },
    { id: 7, carId: 4, y: 2026, m: 8, label: 'C220 · M. Dervishi', from: 28, to: 31, status: 'done' },
    { id: 8, carId: 5, y: 2026, m: 8, label: 'i20 · K. Shehu', from: 22, to: 29, status: 'done' },
    { id: 9, carId: 2, y: 2026, m: 8, label: 'Golf · D. Prifti', from: 4, to: 11, status: 'done' },
    { id: 10, carId: 3, y: 2026, m: 10, label: 'Duster · A. Zeneli', from: 2, to: 6, status: 'reserved' },
    { id: 11, carId: 1, y: 2026, m: 10, label: 'Yaris · S. Bardhi', from: 14, to: 21, status: 'reserved' },
    { id: 12, carId: 4, y: 2026, m: 10, label: 'C220 · R. Gjoka', from: 24, to: 27, status: 'reserved' },
  ],
};
window.RR_FMT = n => n.toLocaleString('de-DE');
window.RR_TONE = s => s === 'active' ? 'success' : s === 'reserved' ? 'warning' : s === 'overdue' ? 'danger' : 'neutral';

// Expiry helpers — TODAY is the demo date. Notify 30 days before.
window.RR_TODAY = new Date(2026, 8, 11);
window.RR_DAYS = iso => iso ? Math.round((new Date(iso) - window.RR_TODAY) / 86400000) : null;
window.RR_DATE = iso => iso ? iso.split('-').reverse().join('.') : '—';
window.RR_EXP = iso => { const n = window.RR_DAYS(iso); if (n === null) return { tone: 'neutral', status: 'done', label: 'Pa të dhëna' }; if (n < 0) return { tone: 'danger', status: 'overdue', label: 'Skaduar ' + (-n) + ' ditë' }; if (n <= 30) return { tone: 'warning', status: 'reserved', label: 'Skadon në ' + n + ' ditë' }; return { tone: 'success', status: 'active', label: 'Në rregull' }; };
window.RR_DOCS = [['kolaudim', 'Kolaudimi'], ['siguracion', 'Siguracioni TPL'], ['kasko', 'Kasko'], ['taksa', 'Taksa vjetore']];
window.RR_ALERTS = () => { const out = []; window.RR_DATA.cars.forEach(c => window.RR_DOCS.forEach(([k, l]) => { const n = window.RR_DAYS(c[k]); if (n !== null && n <= 30) out.push({ id: c.id + k, car: c, key: k, doc: l, days: n, date: c[k] }); })); return out.sort((a, b) => a.days - b.days); };
window.RR_MONTHS = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
