# RinasRent app — UI kit

Click-through recreation of the rental management app: Login (subject / administrator role) → Paneli → Kalendari (click a day) → Kontratat (tabs, search) → Kontratë (form, payment plan, installments, documents) → Printim (A4 contract) → Pagesat (record installment via dialog) → Mjetet (vehicle registry: VIN, km, kolaudim / siguracion / kasko / taksa expiry dates; alerts 30 days ahead; register/edit dialog) → Subjektet (admin only: open accounts, suspend).

Files: `index.html` (entry), `data.js` (sample data), `Shell.jsx` (sidebar + topbar), one JSX per screen, `App.jsx` (routing, toasts, localStorage for current page).
Everything composes components from `_ds_bundle.js`; nothing is re-implemented locally.

Email: `emails/Njoftim-Skadence.html` — send-ready HTML email (table layout, inline styles, Arial/Courier New) for the 30-day expiry alert; previewed inside the Njoftimet settings page.
