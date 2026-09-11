# RinasRent Design System

Design system for **RinasRent** (placeholder name — no brand name was provided), a management platform for car-rental businesses operating at Tirana International Airport (Rinas). One administrator opens accounts; each rental company ("subjekt") logs in and manages its own vehicles, booking calendar, online contracts (saved and printed), and installment payments. UI language is **Albanian**.

## Sources

- GitHub repo `klajditufa/Design` (https://github.com/klajditufa/Design) — **empty at build time**; the user asked for the system to be authored from scratch and this project is intended to fill it. Explore that repo later if content is pushed.
- User brief (Albanian): database for rental cars with calendar, installment payments, online contract that is saved and printed, every booking stored; admin opens accounts for every subject at Rinas.

No logo, fonts, colors, or screens were provided. Every visual decision below is an original proposal — see **Caveats**.

## Products

One product: the **RinasRent web app** (desktop-first admin tool). Roles: Administrator (all subjects, account management) and Subjekt (own data only). Surfaces: Login, Paneli (dashboard), Kalendari, Kontratat + contract form, printable A4 contract, Pagesat (installments), Mjetet (vehicle registry with kolaudim/insurance/kasko/tax expiry and 30-day-ahead alerts), Subjektet.

**Expiry rule:** a document is *Në rregull* (green) beyond 30 days, *Skadon në N ditë* (amber) within 30 days, *Skaduar* (red) past due. Alerts surface on the dashboard, the Mjetet page, as a count on the sidebar item, and by **email** (`ui_kits/rinas-rent/emails/Njoftim-Skadence.html`) at 30 days, 7 days and on the day; recipients and timing are set under Njoftimet.

**Email design:** same navy header with amber alert band, white body, 600px table layout; email-safe fonts (Arial, Courier New for plates/dates) stand in for Outfit/Source Sans/JetBrains Mono. Subject line pattern: "<Dokumenti> skadon në N ditë — <Mjeti> <Targa>".

## Content fundamentals

- **Language:** Albanian, formal-neutral. Address the user with the plural/formal ("Kontrolloni shumën"), never "ti".
- **Casing:** sentence case everywhere; UPPERCASE only for 11–12px section labels and table headers.
- **Buttons:** short imperatives, 1–3 words: *Ruaj*, *Printo*, *Anulo*, *Arkëto*, *Prenotim i ri*, *Kontratë e re*. Primary verbs first; no "Kliko këtu".
- **Titles:** nouns, not sentences: *Kalendari i prenotimeve*, *Pagesat me afat*, *Subjektet*.
- **Feedback copy:** past tense, subject + verb, then reference in mono: "Kontrata u ruajt · KTR-2026-0148". Errors say what to do: "Kontrolloni shumën."
- **Numbers:** amounts in ALL with dot thousands separator ("12.500 ALL"), dates dd.mm.yyyy, plates "AA 123 BB", contract numbers KTR-YYYY-NNNN — all set in the mono font.
- **No emoji.** Icons are Lucide glyphs only.
- **Vibe:** operational, calm, trustworthy — an office tool used daily at an airport desk. Dense but never cramped.

## Visual foundations

- **Colors:** navy primary (`--navy-600`, oklch 38% 0.09 260) for actions, links, selection; navy-900 for the sidebar (the only dark surface); amber accent (`--amber-500`) reserved for the "new booking" action and *Rezervuar* state; cool grays for page/card/border/text; green/red/blue semantic pairs (soft background + strong text). Booking status colors: green *Aktive*, amber *Rezervuar*, red *Vonesë*, gray *Mbyllur*.
- **Type:** Outfit (display, 500–700) for headings, KPI values, brand; Source Sans 3 (body, 400–700) at 15px/1.5; JetBrains Mono for identifiers and amounts. Scale 12/13/15/17/20/24/30/38/48. Headings letter-spacing −0.01em. Loaded from Google Fonts (see caveats).
- **Spacing:** 4px base; 8/12/16/20/24/32 in use; page padding 24; card padding 20; grid gaps 16–20. Sidebar 232px, topbar 56px, content max 1200px.
- **Radii:** sharp — 3px (badges, checkbox), 4px (controls, buttons), 6px (cards, dialogs), pill for tags/switch.
- **Backgrounds:** flat solid surfaces only. No gradients, patterns, illustrations, or photography. Page is gray-50, cards white.
- **Borders:** 1px `--border-default` on cards, inputs, table rows; `--border-strong` on hover/secondary buttons.
- **Shadows:** sm on cards, md on popovers/tooltips, lg on dialogs and toasts. Never on buttons.
- **Focus:** 1px navy border + 3px 28%-alpha navy ring.
- **Hover:** background darkens one step (primary → navy-700; ghost → gray-100; table rows → gray-50). **Press:** one more step darker; no shrink.
- **Motion:** 120–180ms, ease-out cubic-bezier(0.2,0,0,1); background/border/box-shadow only. No bounces, no entrance animations.
- **Transparency/blur:** none, except the dialog overlay (navy at 55%) and white-alpha hover states on the dark sidebar.
- **Layout:** fixed dark sidebar + sticky white topbar; content in a 1200px column; two-column form/summary on contract pages; printable contract is a fixed 794px A4 sheet.
- **Cards:** white, 1px border, 6px radius, sm shadow, optional header with 17px Outfit title and action slot.
- **Imagery:** none in the product. If photos are added (vehicles), use neutral, cool-lit shots on white.

## Iconography

- **Lucide** (https://lucide.dev) at 1.75 stroke, 16–18px in UI, 22px in empty states — loaded from CDN (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) and rendered through the `Icon` component. No icon files are stored in `assets/` since the source provided none; this is a substitution to confirm.
- Core vocabulary: car, calendar-days, file-text, credit-card, banknote, users, building-2, printer, key-round, plus, search, pencil, trash-2, bell, log-out, alert-triangle, check, x, chevron-*.
- No emoji, no unicode glyphs as icons, no hand-drawn SVG. No logo exists — the brand renders as the wordmark "Rinas**Rent**" in Outfit 700 with "Rent" in amber.

## Components

Grouped under `components/`. Each has `.jsx`, `.d.ts`, `.prompt.md`; one card per folder.

- **core/** — Button, IconButton, Badge, Tag, Card, Icon
- **forms/** — Field, Input, Select, Checkbox, Radio, Switch
- **navigation/** — Tabs, SidebarNav, Topbar
- **feedback/** — Dialog, Toast, Tooltip, EmptyState
- **data/** — DataTable, StatCard, CalendarGrid

Intentional additions beyond a standard set (no source inventory existed): Icon (Lucide wrapper), Field, SidebarNav, Topbar, EmptyState, DataTable, StatCard, CalendarGrid — all needed by the product brief (calendar, tables, admin shell).

## Index

- `styles.css` — entry; imports `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `guidelines/` — foundation cards (Colors, Type, Spacing, Effects, Brand)
- `components/` — see above
- `ui_kits/rinas-rent/` — click-through app (login → dashboard → calendar → contracts → print → payments → subjects); `index.html` entry, `README.md`
- `thumbnail.html` — homepage tile
- `SKILL.md` — agent skill wrapper
- `github.md` — source-repo association

## Caveats

- Brand name "RinasRent", palette, fonts and all screens are proposals, not recreations.
- Fonts come from Google Fonts via `@import`; no font binaries are shipped. Provide brand fonts to replace.
- No logo. Provide one to place in `assets/logo.svg`.
