/* @ds-bundle: {"format":4,"namespace":"RinasRentDesignSystem_a23b91","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CalendarGrid","sourcePath":"components/data/CalendarGrid.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f5aadaff3723","components/core/Button.jsx":"9c4181d78553","components/core/Card.jsx":"5e548de024e6","components/core/Icon.jsx":"2651fb613d09","components/core/IconButton.jsx":"3e23a5db8da9","components/core/Tag.jsx":"2f4b1bf8113b","components/data/CalendarGrid.jsx":"3f747d7a2c23","components/data/DataTable.jsx":"e0a080959797","components/data/StatCard.jsx":"9eae50ba2151","components/feedback/Dialog.jsx":"52508ab93802","components/feedback/EmptyState.jsx":"d88042161053","components/feedback/Toast.jsx":"832c306d2783","components/feedback/Tooltip.jsx":"439e3abbee94","components/forms/Checkbox.jsx":"6b7556b7f0e3","components/forms/Field.jsx":"1e6be6ad9e08","components/forms/Input.jsx":"a5e350d1c2cf","components/forms/Radio.jsx":"488f4e4c45fe","components/forms/Select.jsx":"bac7828dc93b","components/forms/Switch.jsx":"6eb611ba967f","components/navigation/SidebarNav.jsx":"1692fc94f348","components/navigation/Tabs.jsx":"11fde4bd92a0","components/navigation/Topbar.jsx":"b4ecb7972664","ui_kits/rinas-rent/App.jsx":"b9bb3a3bb350","ui_kits/rinas-rent/Calendar.jsx":"99c6f4aa15b4","ui_kits/rinas-rent/Cars.jsx":"7d5c6e46946d","ui_kits/rinas-rent/ContractForm.jsx":"9437cd02c6d7","ui_kits/rinas-rent/Contracts.jsx":"a01ffcd3901a","ui_kits/rinas-rent/Dashboard.jsx":"a4838ab2590f","ui_kits/rinas-rent/Login.jsx":"a9b662be1e0f","ui_kits/rinas-rent/Notifications.jsx":"207eb5d98db7","ui_kits/rinas-rent/Payments.jsx":"f3cf392db942","ui_kits/rinas-rent/PrintContract.jsx":"48d02f199628","ui_kits/rinas-rent/Shell.jsx":"3b8e47006b40","ui_kits/rinas-rent/Subjects.jsx":"fd99d0a54442","ui_kits/rinas-rent/data.js":"2ba4bef28a7e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RinasRentDesignSystem_a23b91 = window.RinasRentDesignSystem_a23b91 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: ['var(--gray-100)', 'var(--gray-700)'],
  primary: ['var(--color-primary-soft)', 'var(--navy-700)'],
  success: ['var(--color-success-soft)', 'var(--color-success)'],
  warning: ['var(--color-warning-soft)', 'var(--color-warning)'],
  danger: ['var(--color-danger-soft)', 'var(--color-danger)'],
  info: ['var(--color-info-soft)', 'var(--color-info)']
};
const dots = {
  active: 'var(--status-active)',
  reserved: 'var(--status-reserved)',
  overdue: 'var(--status-overdue)',
  done: 'var(--status-done)'
};
function Badge({
  children,
  tone = 'neutral',
  status,
  style
}) {
  const [bg, fg] = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, status && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: dots[status]
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  title,
  subtitle,
  actions,
  padding = 20,
  flat,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: flat ? 'none' : 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px ' + padding + 'px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: 'none'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide icon via the lucide UMD bundle (window.lucide). name is kebab-case e.g. "car", "calendar-days". */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const html = React.useMemo(() => {
    const L = typeof window !== 'undefined' && window.lucide;
    if (!L) return '';
    const pascal = name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
    const node = L.icons && L.icons[pascal];
    if (!node) return '';
    try {
      const el = L.createElement(node);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke-width', strokeWidth);
      return el.outerHTML;
    } catch (e) {
      return '';
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      flex: 'none',
      lineHeight: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: html
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 12,
    fs: 'var(--text-sm)'
  },
  md: {
    h: 'var(--control-h-md)',
    px: 16,
    fs: 'var(--text-base)'
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 20,
    fs: 'var(--text-md)'
  }
};
const variants = {
  primary: {
    bg: 'var(--color-primary)',
    fg: 'var(--color-on-primary)',
    bd: 'transparent',
    hbg: 'var(--color-primary-hover)',
    abg: 'var(--color-primary-active)'
  },
  secondary: {
    bg: 'var(--surface-card)',
    fg: 'var(--text-body)',
    bd: 'var(--border-strong)',
    hbg: 'var(--gray-100)',
    abg: 'var(--gray-200)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-body)',
    bd: 'transparent',
    hbg: 'var(--gray-100)',
    abg: 'var(--gray-200)'
  },
  danger: {
    bg: 'var(--color-danger)',
    fg: '#fff',
    bd: 'transparent',
    hbg: 'var(--red-500)',
    abg: 'var(--red-700)'
  },
  accent: {
    bg: 'var(--color-accent)',
    fg: 'var(--navy-900)',
    bd: 'transparent',
    hbg: 'var(--amber-400)',
    abg: 'var(--amber-700)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  fullWidth,
  style,
  type = 'button',
  ...rest
}) {
  const [st, setSt] = React.useState('idle');
  const s = sizes[size] || sizes.md,
    v = variants[variant] || variants.primary;
  const bg = st === 'active' ? v.abg : st === 'hover' ? v.hbg : v.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setSt('hover'),
    onMouseLeave: () => setSt('idle'),
    onMouseDown: () => setSt('active'),
    onMouseUp: () => setSt('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 600,
      lineHeight: 1,
      color: v.fg,
      background: bg,
      border: '1px solid ' + v.bd,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : undefined,
      transition: 'background var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : 17
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'sm' ? 15 : 17
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  active,
  disabled,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const d = size === 'sm' ? 32 : size === 'lg' ? 44 : 38;
  const dark = variant === 'dark';
  const bg = active ? dark ? 'oklch(100% 0 0 / 0.12)' : 'var(--color-primary-soft)' : h ? dark ? 'oklch(100% 0 0 / 0.08)' : 'var(--gray-100)' : variant === 'outline' ? 'var(--surface-card)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-grid',
      placeItems: 'center',
      border: variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent',
      borderRadius: 'var(--radius-md)',
      background: bg,
      color: dark ? 'var(--text-on-dark)' : active ? 'var(--color-primary)' : 'var(--text-muted)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 18
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  selected,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--color-primary)' : 'var(--border-strong)'),
      background: selected ? 'var(--color-primary-soft)' : 'var(--surface-card)',
      color: selected ? 'var(--navy-700)' : 'var(--text-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Hiq",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/CalendarGrid.jsx
try { (() => {
const DAYS = ['Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht', 'Die'];
const colors = {
  active: 'var(--status-active)',
  reserved: 'var(--status-reserved)',
  overdue: 'var(--status-overdue)',
  done: 'var(--status-done)'
};
function CalendarGrid({
  year,
  month,
  events = [],
  today,
  onDayClick,
  style
}) {
  const first = new Date(year, month - 1, 1);
  const offset = (first.getDay() + 6) % 7;
  const dim = new Date(year, month, 0).getDate();
  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= dim; d++) cells.push(d);
  while (cells.length % 7) cells.push(null);
  const byDay = {};
  events.forEach(e => {
    for (let d = e.from; d <= e.to; d++) (byDay[d] = byDay[d] || []).push(e);
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,minmax(0,1fr))',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      ...style
    }
  }, DAYS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      padding: '8px 10px',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      background: 'var(--surface-sunken)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, d)), cells.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: d && onDayClick ? () => onDayClick(d) : undefined,
    style: {
      minHeight: 84,
      padding: 6,
      borderRight: i % 7 < 6 ? '1px solid var(--border-default)' : 0,
      borderBottom: i < cells.length - 7 ? '1px solid var(--border-default)' : 0,
      background: d ? 'transparent' : 'var(--gray-50)',
      cursor: d && onDayClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 0
    }
  }, d && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: d === today ? 700 : 500,
      color: d === today ? '#fff' : 'var(--text-muted)',
      background: d === today ? 'var(--color-primary)' : 'transparent',
      width: 22,
      height: 22,
      borderRadius: '50%',
      display: 'inline-grid',
      placeItems: 'center',
      alignSelf: 'flex-start'
    }
  }, d), (byDay[d] || []).slice(0, 3).map(e => /*#__PURE__*/React.createElement("span", {
    key: e.id,
    title: e.label,
    style: {
      fontSize: 11,
      fontWeight: 500,
      padding: '2px 6px',
      borderRadius: 'var(--radius-sm)',
      background: colors[e.status] || colors.reserved,
      color: e.status === 'reserved' ? 'var(--navy-900)' : '#fff',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      opacity: e.from === d || first.getDay && d === 1 ? 1 : 0.85
    }
  }, e.from === d ? e.label : '\u00a0')), (byDay[d] || []).length > 3 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)'
    }
  }, "+", byDay[d].length - 3))));
}
Object.assign(__ds_scope, { CalendarGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CalendarGrid.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  rowKey = 'id',
  onRowClick,
  dense,
  style
}) {
  const [hov, setHov] = React.useState(null);
  const py = dense ? 8 : 12;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: '8px 12px',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-sunken)',
      whiteSpace: 'nowrap',
      width: c.width
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r[rowKey] ?? i,
    onClick: onRowClick ? () => onRowClick(r) : undefined,
    onMouseEnter: () => setHov(i),
    onMouseLeave: () => setHov(null),
    style: {
      background: hov === i ? 'var(--gray-50)' : 'transparent',
      cursor: onRowClick ? 'pointer' : 'default'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: py + 'px 12px',
      borderBottom: '1px solid var(--border-default)',
      textAlign: c.align || 'left',
      fontFamily: c.mono ? 'var(--font-mono)' : 'inherit',
      fontSize: c.mono ? 13 : 'inherit',
      color: 'var(--text-body)',
      verticalAlign: 'middle',
      whiteSpace: c.nowrap ? 'nowrap' : 'normal'
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  deltaTone = 'neutral',
  icon,
  style
}) {
  const col = deltaTone === 'up' ? 'var(--color-success)' : deltaTone === 'down' ? 'var(--color-danger)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: '16px 20px',
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      lineHeight: 1.1,
      marginTop: 4,
      letterSpacing: '-0.01em'
    }
  }, value), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: col,
      marginTop: 6,
      fontWeight: 500
    }
  }, delta)), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-md)',
      background: 'var(--color-primary-soft)',
      color: 'var(--color-primary)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '90vh',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      margin: 0,
      flex: 1,
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Mbyll",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      overflow: 'auto'
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '14px 20px',
      borderTop: '1px solid var(--border-default)',
      background: 'var(--surface-sunken)',
      borderRadius: '0 0 var(--radius-lg) var(--radius-lg)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 24px',
      gap: 8,
      color: 'var(--text-muted)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-sunken)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--text-subtle)',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      color: 'var(--text-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      maxWidth: 360
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const map = {
  success: ['check-circle-2', 'var(--color-success)'],
  danger: ['alert-circle', 'var(--color-danger)'],
  info: ['info', 'var(--color-info)'],
  warning: ['alert-triangle', 'var(--color-warning)']
};
function Toast({
  tone = 'info',
  title,
  message,
  action,
  onClose,
  style
}) {
  const [ic, col] = map[tone] || map.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '12px 14px',
      background: 'var(--gray-900)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 18,
    color: col,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 'var(--text-sm)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--navy-200)',
      marginTop: 2
    }
  }, message)), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: action.onClick,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--amber-400)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      padding: 0
    }
  }, action.label), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Mbyll",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--navy-300)',
      cursor: 'pointer',
      padding: 0,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  side = 'top'
}) {
  const [on, setOn] = React.useState(false);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 6px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 6px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false)
  }, children, on && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--gray-900)',
      color: '#fff',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      padding: '5px 8px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      zIndex: 50,
      boxShadow: 'var(--shadow-md)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-base)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (on ? 'var(--color-primary)' : 'var(--border-strong)'),
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'inline-grid',
      placeItems: 'center',
      color: '#fff',
      transition: 'background var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 3
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = (focus, error, disabled, size) => ({
  height: size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)',
  width: '100%',
  boxSizing: 'border-box',
  padding: '0 12px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  color: 'var(--text-body)',
  background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
  border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'box-shadow var(--dur-fast), border-color var(--dur-fast)'
});
function Input({
  icon,
  suffix,
  error,
  disabled,
  size = 'md',
  mono,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = base(focus, error, disabled, size);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      display: 'inline-flex',
      color: 'var(--text-subtle)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...s,
      paddingLeft: icon ? 34 : 12,
      paddingRight: suffix ? 44 : 12,
      fontFamily: mono ? 'var(--font-mono)' : s.fontFamily,
      fontSize: mono ? 14 : s.fontSize
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 10,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-subtle)',
      pointerEvents: 'none'
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  inline,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: inline ? 'row' : 'column',
      gap: inline ? 20 : 10,
      flexWrap: 'wrap',
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const on = cur === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      onClick: () => {
        setInner(opt.value);
        onChange && onChange(opt.value);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        fontSize: 'var(--text-base)',
        userSelect: 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: (on ? 5 : 1) + 'px solid ' + (on ? 'var(--color-primary)' : 'var(--border-strong)'),
        background: '#fff',
        boxSizing: 'border-box',
        transition: 'border var(--dur-fast)'
      }
    }), /*#__PURE__*/React.createElement("span", null, opt.label, opt.hint && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)',
        marginLeft: 6
      }
    }, opt.hint)));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = (focus, error, disabled, size) => ({
  height: size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)',
  width: '100%',
  boxSizing: 'border-box',
  padding: '0 12px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-base)',
  color: 'var(--text-body)',
  background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
  border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-md)',
  outline: 'none',
  boxShadow: focus ? 'var(--ring-focus)' : 'none',
  transition: 'box-shadow var(--dur-fast), border-color var(--dur-fast)'
});
function Select({
  options = [],
  error,
  disabled,
  size = 'md',
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...base(focus, error, disabled, size),
      appearance: 'none',
      paddingRight: 34,
      cursor: 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 10,
      display: 'inline-flex',
      color: 'var(--text-subtle)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => {
      if (disabled) return;
      setInner(!on);
      onChange && onChange(!on);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--text-base)',
      userSelect: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 36,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--gray-300)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-out)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function SidebarNav({
  items = [],
  value,
  onChange,
  brand,
  footer,
  style
}) {
  const [hov, setHov] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--sidebar-w)',
      minHeight: '100%',
      background: 'var(--surface-sidebar)',
      color: 'var(--text-on-dark)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      padding: '16px 12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px 20px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: '-0.01em'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => it.section ? /*#__PURE__*/React.createElement("div", {
    key: it.section,
    style: {
      padding: '16px 10px 6px',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, it.section) : /*#__PURE__*/React.createElement("button", {
    key: it.value,
    type: "button",
    onClick: () => onChange && onChange(it.value),
    onMouseEnter: () => setHov(it.value),
    onMouseLeave: () => setHov(null),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 36,
      padding: '0 10px',
      border: 0,
      borderRadius: 'var(--radius-md)',
      background: it.value === value ? 'oklch(100% 0 0 / 0.14)' : hov === it.value ? 'oklch(100% 0 0 / 0.07)' : 'transparent',
      color: it.value === value ? '#fff' : 'var(--navy-200)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: it.value === value ? 600 : 500,
      cursor: 'pointer',
      textAlign: 'left',
      transition: 'background var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.count !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      background: 'var(--amber-500)',
      color: 'var(--navy-900)',
      borderRadius: 'var(--radius-pill)',
      padding: '1px 6px'
    }
  }, it.count)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, footer));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, items.map(t => {
    const on = t.value === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => {
        setInner(t.value);
        onChange && onChange(t.value);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 40,
        padding: '0 14px',
        marginBottom: -1,
        background: 'none',
        border: 0,
        borderBottom: '2px solid ' + (on ? 'var(--color-primary)' : 'transparent'),
        color: on ? 'var(--color-primary)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, t.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), t.label, t.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        background: on ? 'var(--color-primary-soft)' : 'var(--gray-100)',
        borderRadius: 'var(--radius-pill)',
        padding: '1px 7px'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
function Topbar({
  title,
  breadcrumb,
  actions,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-h)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 24px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, breadcrumb && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-subtle)',
      lineHeight: 1.2
    }
  }, breadcrumb), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      margin: 0,
      lineHeight: 1.2,
      color: 'var(--text-heading)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, actions));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Toast
} = window.RinasRentDesignSystem_a23b91;
const TITLES = {
  dashboard: ['Paneli', 'Mirë se vini · 11 Shtator 2026'],
  calendar: ['Kalendari i prenotimeve', 'Operacione'],
  contracts: ['Kontratat', 'Operacione'],
  payments: ['Pagesat me afat', 'Operacione'],
  cars: ['Mjetet', 'Operacione · Regjistri i mjeteve dhe skadencat'],
  subjects: ['Subjektet', 'Administrim'],
  notifications: ['Njoftimet', 'Cilësime · email për skadencat']
};
function App() {
  const saved = (() => {
    try {
      return JSON.parse(localStorage.getItem('rr-kit') || '{}');
    } catch (e) {
      return {};
    }
  })();
  const [page, setPage] = React.useState(saved.page || 'login');
  const [role, setRole] = React.useState(saved.role || 'subject');
  const [contract, setContract] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  React.useEffect(() => {
    localStorage.setItem('rr-kit', JSON.stringify({
      page,
      role
    }));
  }, [page, role]);
  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(t);
    }
  }, [toast]);
  const openContract = c => {
    setContract(c);
    setPage('contract');
  };
  if (page === 'login') return /*#__PURE__*/React.createElement(Login, {
    onLogin: r => {
      setRole(r);
      setPage('dashboard');
    }
  });
  if (page === 'print') return /*#__PURE__*/React.createElement(PrintContract, {
    contract: contract,
    onBack: () => setPage('contract')
  });
  const isContract = page === 'contract';
  const [title, bc] = isContract ? [contract ? contract.nr : 'Kontratë e re', 'Kontratat'] : TITLES[page] || ['', ''];
  const actions = page === 'calendar' || page === 'contracts' || page === 'dashboard' ? /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "plus",
    onClick: () => openContract(null)
  }, "Prenotim i ri") : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Shell, {
    page: isContract ? 'contracts' : page,
    setPage: p => {
      setPage(p);
    },
    title: title,
    breadcrumb: bc,
    actions: actions,
    role: role
  }, page === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    go: setPage,
    openContract: openContract
  }), page === 'calendar' && /*#__PURE__*/React.createElement(Calendar, {
    onNew: () => openContract(null)
  }), page === 'contracts' && /*#__PURE__*/React.createElement(Contracts, {
    openContract: openContract,
    onNew: () => openContract(null)
  }), isContract && /*#__PURE__*/React.createElement(ContractForm, {
    contract: contract,
    onSave: () => {
      setToast({
        tone: 'success',
        title: 'Kontrata u ruajt',
        message: (contract ? contract.nr : 'KTR-2026-0149') + ' · ruajtur në sistem',
        action: contract && {
          label: 'Printo',
          onClick: () => setPage('print')
        }
      });
      if (!contract) {
        setContract(window.RR_DATA.contracts[0]);
      }
    },
    onPrint: () => setPage('print'),
    onPay: () => setPage('payments')
  }), page === 'payments' && /*#__PURE__*/React.createElement(Payments, {
    toast: setToast
  }), page === 'cars' && /*#__PURE__*/React.createElement(Cars, {
    toast: setToast
  }), page === 'subjects' && /*#__PURE__*/React.createElement(Subjects, {
    toast: setToast
  }), page === 'notifications' && /*#__PURE__*/React.createElement(Notifications, {
    toast: setToast
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, _extends({}, toast, {
    onClose: () => setToast(null)
  }))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Calendar.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Tag,
  Badge,
  CalendarGrid,
  Select
} = window.RinasRentDesignSystem_a23b91;
function Calendar({
  onNew
}) {
  const D = window.RR_DATA;
  const [cls, setCls] = React.useState('Të gjitha');
  const [day, setDay] = React.useState(null);
  const [carId, setCarId] = React.useState('');
  const [ym, setYm] = React.useState({
    y: 2026,
    m: 9
  });
  const shift = n => {
    setDay(null);
    setYm(({
      y,
      m
    }) => {
      let mm = m + n,
        yy = y;
      if (mm < 1) {
        mm = 12;
        yy--;
      }
      if (mm > 12) {
        mm = 1;
        yy++;
      }
      return {
        y: yy,
        m: mm
      };
    });
  };
  const isToday = ym.y === 2026 && ym.m === 9;
  const monthLabel = window.RR_MONTHS[ym.m - 1] + ' ' + ym.y;
  const carById = id => D.cars.find(x => x.id === id);
  const events = D.events.filter(e => {
    const car = carById(e.carId);
    return e.y === ym.y && e.m === ym.m && (cls === 'Të gjitha' || car && car.cls === cls) && (!carId || String(e.carId) === carId);
  });
  const carOptions = D.cars.filter(x => cls === 'Të gjitha' || x.cls === cls).map(x => ({
    value: String(x.id),
    label: x.name + ' · ' + x.plate
  }));
  const dayEvents = day ? events.filter(e => day >= e.from && day <= e.to) : [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Muaji i kaluar",
    variant: "outline",
    size: "sm",
    onClick: () => shift(-1)
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      minWidth: 150,
      textAlign: 'center'
    }
  }, monthLabel), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Muaji tjet\xEBr",
    variant: "outline",
    size: "sm",
    onClick: () => shift(1)
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    disabled: isToday,
    onClick: () => {
      setDay(null);
      setYm({
        y: 2026,
        m: 9
      });
    }
  }, "Sot"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginLeft: 'auto',
      flexWrap: 'wrap'
    }
  }, ['Të gjitha', 'Ekonomike', 'Kompakte', 'SUV', 'Premium'].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cls === c,
    onClick: () => {
      setCls(c);
      setCarId('');
    }
  }, c))), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    style: {
      width: 220
    },
    value: carId,
    onChange: e => setCarId(e.target.value),
    placeholder: "T\xEB gjitha makinat",
    options: carOptions
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: day ? 'minmax(0,1fr) 300px' : '1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(CalendarGrid, {
    year: ym.y,
    month: ym.m,
    today: isToday ? 11 : undefined,
    events: events,
    onDayClick: setDay
  }), day && /*#__PURE__*/React.createElement(Card, {
    title: day + ' ' + monthLabel,
    subtitle: dayEvents.length + ' prenotime' + (carId || cls !== 'Të gjitha' ? ' · filtruar' : ''),
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Mbyll",
      size: "sm",
      onClick: () => setDay(null)
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, dayEvents.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.id,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      alignSelf: 'stretch',
      borderRadius: 2,
      background: 'var(--status-' + e.status + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, e.label), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)'
    }
  }, e.from, "\u2013", e.to, " ", window.RR_MONTHS[ym.m - 1])), /*#__PURE__*/React.createElement(Badge, {
    tone: window.RR_TONE(e.status),
    status: e.status
  }, e.status === 'active' ? 'Aktive' : e.status === 'reserved' ? 'Rezervuar' : e.status === 'overdue' ? 'Vonesë' : 'Mbyllur'))), !dayEvents.length && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, "Asnj\xEB prenotim."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "plus",
    fullWidth: true,
    onClick: onNew
  }, "Prenotim p\xEBr k\xEBt\xEB dit\xEB")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, [['active', 'Aktive'], ['reserved', 'Rezervuar'], ['overdue', 'Vonesë'], ['done', 'Mbyllur']].map(([s, l]) => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: 'var(--status-' + s + ')'
    }
  }), l))));
}
Object.assign(window, {
  Calendar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Calendar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Cars.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  DataTable,
  Input,
  Tag,
  Tabs,
  Dialog,
  Field,
  Select,
  Switch,
  StatCard,
  Icon
} = window.RinasRentDesignSystem_a23b91;
function ExpiryCell({
  iso
}) {
  const e = window.RR_EXP(iso);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: e.status === 'overdue' ? 'var(--color-danger)' : e.status === 'reserved' ? 'var(--color-warning)' : 'var(--text-body)',
      fontWeight: e.status === 'active' ? 400 : 600
    }
  }, window.RR_DATE(iso)), e.status !== 'active' && /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone,
    status: e.status
  }, e.label));
}
function CarForm({
  car
}) {
  const c = car || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Marka dhe modeli",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: c.name,
    placeholder: "Toyota Yaris"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Targa",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: c.plate,
    placeholder: "AA 123 BB"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Numri i shasis\xEB (VIN)"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: c.vin,
    placeholder: "17 karaktere"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Viti"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: c.year,
    placeholder: "2024"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Klasa"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: c.cls,
    options: ['Ekonomike', 'Kompakte', 'SUV', 'Premium', 'Furgon']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\xC7mimi ditor"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    suffix: "ALL",
    defaultValue: c.price
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Kilometrazhi"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    suffix: "km",
    defaultValue: c.km
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Statusi"
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "N\xEB park",
    options: ['Në park', 'Në servis', 'Jashtë përdorimit']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      paddingTop: 8,
      borderTop: '1px solid var(--border-default)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Skadencat \xB7 njoftim 30 dit\xEB p\xEBrpara"), window.RR_DOCS.map(([k, l]) => /*#__PURE__*/React.createElement(Field, {
    key: k,
    label: l,
    hint: c[k] ? window.RR_EXP(c[k]).label : 'Opsionale'
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    icon: "calendar",
    defaultValue: window.RR_DATE(c[k]) === '—' ? '' : window.RR_DATE(c[k]),
    placeholder: "dd.mm.vvvv"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Njofto me email dhe n\xEB panel 30 dit\xEB para \xE7do skadence",
    defaultChecked: true
  })));
}
function Cars({
  toast
}) {
  const D = window.RR_DATA;
  const alerts = window.RR_ALERTS();
  const [tab, setTab] = React.useState('all');
  const [edit, setEdit] = React.useState(undefined);
  const [cls, setCls] = React.useState('Të gjitha');
  const [q, setQ] = React.useState('');
  const soon = c => window.RR_DOCS.some(([k]) => {
    const n = window.RR_DAYS(c[k]);
    return n !== null && n <= 30;
  });
  const rows = D.cars.filter(c => (tab === 'all' || soon(c)) && (cls === 'Të gjitha' || c.cls === cls) && (c.name + c.plate + c.vin).toLowerCase().includes(q.toLowerCase()));
  const overdue = alerts.filter(a => a.days < 0).length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Mjete t\xEB regjistruara",
    value: D.cars.length,
    icon: "car"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Skadenca brenda 30 dit\xEBve",
    value: alerts.length - overdue,
    delta: "kolaudim, siguracion, kasko",
    icon: "bell-ring"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Dokumente t\xEB skaduara",
    value: overdue,
    delta: overdue ? 'Mjeti nuk duhet dhënë me qera' : 'Asnjë',
    deltaTone: overdue ? 'down' : 'up',
    icon: "alert-triangle"
  })), alerts.length > 0 && /*#__PURE__*/React.createElement(Card, {
    title: "Njoftime skadencash",
    subtitle: "D\xEBrguar automatikisht 30 dit\xEB para afatit",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, alerts.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 20px',
      borderTop: i ? '1px solid var(--border-default)' : 0,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.days < 0 ? 'alert-triangle' : 'bell',
    size: 16,
    color: a.days < 0 ? 'var(--color-danger)' : 'var(--color-warning)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      width: 90
    }
  }, a.car.plate), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      width: 140
    }
  }, a.car.name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      flex: 1
    }
  }, a.doc, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, window.RR_DATE(a.date))), /*#__PURE__*/React.createElement(Badge, {
    tone: window.RR_EXP(a.date).tone,
    status: window.RR_EXP(a.date).status
  }, window.RR_EXP(a.date).label), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "pencil",
    onClick: () => setEdit(a.car)
  }, "P\xEBrdit\xEBso"))))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'all',
      label: 'Të gjitha mjetet',
      count: D.cars.length
    }, {
      value: 'soon',
      label: 'Me skadenca',
      icon: 'bell',
      count: D.cars.filter(soon).length
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "K\xEBrko model, targ\xEB, VIN\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      maxWidth: 320
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['Të gjitha', 'Ekonomike', 'Kompakte', 'SUV', 'Premium'].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cls === c,
    onClick: () => setCls(c)
  }, c))), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => setEdit(null)
  }, "Regjistro mjet")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    onRowClick: setEdit,
    columns: [{
      key: 'name',
      label: 'Mjeti',
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600
        }
      }, r.name, " ", /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-subtle)',
          fontWeight: 400
        }
      }, "\xB7 ", r.year)), /*#__PURE__*/React.createElement("div", {
        style: {
          color: 'var(--text-subtle)',
          fontSize: 12,
          fontFamily: 'var(--font-mono)'
        }
      }, r.vin))
    }, {
      key: 'plate',
      label: 'Targa',
      mono: true,
      nowrap: true
    }, {
      key: 'cls',
      label: 'Klasa'
    }, {
      key: 'km',
      label: 'Km',
      align: 'right',
      mono: true,
      render: r => window.RR_FMT(r.km)
    }, {
      key: 'kolaudim',
      label: 'Kolaudimi',
      render: r => /*#__PURE__*/React.createElement(ExpiryCell, {
        iso: r.kolaudim
      })
    }, {
      key: 'siguracion',
      label: 'Siguracioni',
      render: r => /*#__PURE__*/React.createElement(ExpiryCell, {
        iso: r.siguracion
      })
    }, {
      key: 'kasko',
      label: 'Kasko',
      render: r => /*#__PURE__*/React.createElement(ExpiryCell, {
        iso: r.kasko
      })
    }, {
      key: 'taksa',
      label: 'Taksa',
      render: r => /*#__PURE__*/React.createElement(ExpiryCell, {
        iso: r.taksa
      })
    }, {
      key: 'a',
      label: '',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement(IconButton, {
        icon: "pencil",
        label: "Ndrysho",
        size: "sm",
        onClick: e => {
          e.stopPropagation();
          setEdit(r);
        }
      })
    }]
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: edit !== undefined,
    width: 640,
    title: edit ? edit.name + ' · ' + edit.plate : 'Regjistro mjet të ri',
    onClose: () => setEdit(undefined),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setEdit(undefined)
    }, "Anulo"), /*#__PURE__*/React.createElement(Button, {
      icon: "save",
      onClick: () => {
        setEdit(undefined);
        toast && toast({
          tone: 'success',
          title: edit ? 'Mjeti u përditësua' : 'Mjeti u regjistrua',
          message: edit ? edit.plate : 'Skadencat do të njoftohen 30 ditë përpara'
        });
      }
    }, "Ruaj"))
  }, edit !== undefined && /*#__PURE__*/React.createElement(CarForm, {
    car: edit
  })));
}
Object.assign(window, {
  Cars
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Cars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/ContractForm.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Field,
  Input,
  Select,
  Checkbox,
  Radio,
  Tabs,
  DataTable,
  Icon
} = window.RinasRentDesignSystem_a23b91;
function ContractForm({
  contract,
  onSave,
  onPrint,
  onPay
}) {
  const c = contract || {
    nr: 'KTR-2026-0149',
    client: '',
    doc: '',
    car: '',
    from: '',
    to: '',
    days: 0,
    total: 0,
    paid: 0,
    plan: 1,
    status: 'reserved',
    label: 'Draft'
  };
  const [tab, setTab] = React.useState('k');
  const [plan, setPlan] = React.useState(String(c.plan));
  const isNew = !contract;
  const inst = window.RR_DATA.installments.filter(i => i.ktr === c.nr);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: window.RR_TONE(c.status),
    status: c.status
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, isNew ? 'Kontrata krijohet dhe ruhet në sistem; mund të printohet pas ruajtjes.' : 'Krijuar 09.09.2026 · Subjekti ' + c.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, !isNew && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "printer",
    onClick: onPrint
  }, "Printo"), /*#__PURE__*/React.createElement(Button, {
    icon: "save",
    onClick: onSave
  }, isNew ? 'Ruaj kontratën' : 'Ruaj ndryshimet'))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'k',
      label: 'Kontrata',
      icon: 'file-text'
    }, {
      value: 'p',
      label: 'Pagesat',
      icon: 'credit-card',
      count: inst.length || undefined
    }, {
      value: 'd',
      label: 'Dokumente',
      icon: 'paperclip'
    }]
  }), tab === 'k' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Qiramarr\xEBsi"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Em\xEBr Mbiem\xEBr",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: c.client,
    placeholder: "Em\xEBr Mbiem\xEBr"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nr. dokumenti (ID / Pasaport\xEB)",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: c.doc,
    placeholder: "J12345678K"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Patent\xEB"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "AL-1234567"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefon"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "phone",
    placeholder: "+355 69 000 0000"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Adresa",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Rruga, Qyteti, Shteti"
  })))), /*#__PURE__*/React.createElement(Card, {
    title: "Mjeti dhe periudha"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Makina",
    required: true,
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: c.car,
    placeholder: "Zgjidh makin\xEBn",
    options: window.RR_DATA.cars.map(x => x.name + ' · ' + x.plate)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Marrja",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "calendar",
    mono: true,
    defaultValue: c.from,
    placeholder: "dd.mm.vvvv  hh:mm"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Kthimi",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "calendar",
    mono: true,
    defaultValue: c.to,
    placeholder: "dd.mm.vvvv  hh:mm"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Vendi i marrjes"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Aeroporti Rinas · Terminali', 'Zyra Tiranë', 'Adresë tjetër']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Km n\xEB dor\xEBzim"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    suffix: "km",
    placeholder: "0"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sigurim i plot\xEB (CDW)",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Shofer i dyt\xEB"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sedilje f\xEBmij\xEBsh"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "GPS"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "P\xEBrmbledhje",
    subtitle: c.nr
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 'var(--text-sm)'
    }
  }, [['Ditë', c.days || '—'], ['Çmimi ditor', c.days ? window.RR_FMT(c.total / c.days) + ' ALL' : '—'], ['Depozitë', '20.000 ALL']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      paddingTop: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Totali"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600
    }
  }, window.RR_FMT(c.total), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, "ALL"))))), /*#__PURE__*/React.createElement(Card, {
    title: "Plani i pages\xEBs"
  }, /*#__PURE__*/React.createElement(Radio, {
    value: plan,
    onChange: setPlan,
    options: [{
      value: '1',
      label: 'Pagesë e plotë',
      hint: 'në marrje'
    }, {
      value: '2',
      label: '2 këste',
      hint: '50% + 50%'
    }, {
      value: '3',
      label: '3 këste',
      hint: 'çdo 30 ditë'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 12,
      background: 'var(--surface-sunken)',
      borderRadius: 4,
      fontSize: 'var(--text-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, Array.from({
    length: +plan
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "K\xEBsti ", i + 1, "/", plan), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, c.total ? window.RR_FMT(Math.round(c.total / +plan)) : '—', " ALL"))))), /*#__PURE__*/React.createElement(Card, {
    flat: true
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)'
      }
    }, "Qiramarr\xEBsi pranon kushtet e p\xEBrgjithshme t\xEB kontrat\xEBs."),
    defaultChecked: !isNew
  })))), tab === 'p' && /*#__PURE__*/React.createElement(Card, {
    title: "K\xEBstet",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus",
      onClick: onPay
    }, "Regjistro pages\xEB"),
    padding: 0
  }, inst.length ? /*#__PURE__*/React.createElement(DataTable, {
    rows: inst,
    columns: [{
      key: 'nr',
      label: 'Kësti',
      mono: true
    }, {
      key: 'due',
      label: 'Afati',
      mono: true
    }, {
      key: 'amount',
      label: 'Shuma (ALL)',
      align: 'right',
      mono: true,
      render: r => window.RR_FMT(r.amount)
    }, {
      key: 'status',
      label: 'Statusi',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: window.RR_TONE(r.status),
        status: r.status
      }, r.label)
    }]
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, "K\xEBstet krijohen pas ruajtjes s\xEB kontrat\xEBs.")), tab === 'd' && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Kontrata_' + c.nr + '.pdf', 'ID_qiramarresi.jpg', 'Patenta.jpg'].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      border: '1px solid var(--border-default)',
      borderRadius: 4,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file",
    size: 16,
    color: "var(--text-subtle)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, n), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    icon: "download"
  }, "Shkarko"))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "upload",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Ngarko dokument"))));
}
Object.assign(window, {
  ContractForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/ContractForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Contracts.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  DataTable,
  Input,
  Select,
  Tabs,
  EmptyState,
  Tag
} = window.RinasRentDesignSystem_a23b91;
function Contracts({
  openContract,
  onNew
}) {
  const D = window.RR_DATA;
  const [tab, setTab] = React.useState('all');
  const [q, setQ] = React.useState('');
  const rows = D.contracts.filter(c => (tab === 'all' || c.status === tab) && (c.client + c.nr + c.car).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'all',
      label: 'Të gjitha',
      count: D.contracts.length
    }, {
      value: 'active',
      label: 'Aktive',
      count: 1
    }, {
      value: 'reserved',
      label: 'Rezervuar',
      count: 1
    }, {
      value: 'overdue',
      label: 'Në vonesë',
      count: 1
    }, {
      value: 'done',
      label: 'Mbyllur',
      count: 2
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "K\xEBrko klient, nr. kontrate, targ\xEB\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      maxWidth: 360
    }
  }), /*#__PURE__*/React.createElement(Select, {
    style: {
      width: 180
    },
    options: ['Shtator 2026', 'Gusht 2026', 'Korrik 2026']
  }), /*#__PURE__*/React.createElement(Select, {
    style: {
      width: 200
    },
    options: ['Të gjitha makinat', 'Toyota Yaris', 'VW Golf 8', 'Dacia Duster']
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, rows.length ? /*#__PURE__*/React.createElement(DataTable, {
    onRowClick: openContract,
    rows: rows,
    columns: [{
      key: 'nr',
      label: 'Nr.',
      mono: true,
      nowrap: true
    }, {
      key: 'client',
      label: 'Klienti',
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600
        }
      }, r.client), /*#__PURE__*/React.createElement("div", {
        style: {
          color: 'var(--text-subtle)',
          fontSize: 12
        }
      }, r.subject))
    }, {
      key: 'car',
      label: 'Makina'
    }, {
      key: 'from',
      label: 'Periudha',
      mono: true,
      nowrap: true,
      render: r => r.from + ' – ' + r.to
    }, {
      key: 'days',
      label: 'Ditë',
      align: 'right',
      mono: true
    }, {
      key: 'total',
      label: 'Total (ALL)',
      align: 'right',
      mono: true,
      render: r => window.RR_FMT(r.total)
    }, {
      key: 'paid',
      label: 'Paguar',
      align: 'right',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: r.paid < r.total ? 'var(--color-warning)' : 'var(--color-success)'
        }
      }, window.RR_FMT(r.paid))
    }, {
      key: 'status',
      label: 'Statusi',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: window.RR_TONE(r.status),
        status: r.status
      }, r.label)
    }]
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "file-search",
    title: "Asnj\xEB kontrat\xEB",
    description: "Provo nj\xEB filt\xEBr tjet\xEBr ose krijo nj\xEB kontrat\xEB t\xEB re.",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "plus",
      onClick: onNew
    }, "Kontrat\xEB e re")
  })));
}
Object.assign(window, {
  Contracts
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Contracts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Dashboard.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  DataTable,
  StatCard,
  CalendarGrid,
  Icon
} = window.RinasRentDesignSystem_a23b91;
function Dashboard({
  go,
  openContract
}) {
  const D = window.RR_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Makina jasht\xEB sot",
    value: "3 / 5",
    icon: "car"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Prenotime k\xEBt\xEB muaj",
    value: "12",
    delta: "+3 nga gushti",
    deltaTone: "up",
    icon: "calendar-days"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "T\xEB ardhura \xB7 Shtator",
    value: window.RR_FMT(139600) + ' ALL',
    icon: "banknote"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "K\xEBste n\xEB vones\xEB",
    value: "1",
    delta: "10.400 ALL",
    deltaTone: "down",
    icon: "alert-triangle"
  })), window.RR_ALERTS().length > 0 && /*#__PURE__*/React.createElement(Card, {
    title: "Skadenca t\xEB af\xEBrta",
    subtitle: "Kolaudim, siguracion, kasko \u2014 njoftim 30 dit\xEB p\xEBrpara",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => go('cars')
    }, "Regjistri i mjeteve")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: 10
    }
  }, window.RR_ALERTS().map(a => {
    const e = window.RR_EXP(a.date);
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        padding: '10px 12px',
        border: '1px solid var(--border-default)',
        borderRadius: 4,
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.days < 0 ? 'alert-triangle' : 'bell',
      size: 16,
      color: a.days < 0 ? 'var(--color-danger)' : 'var(--color-warning)'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, a.car.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 400,
        color: 'var(--text-muted)'
      }
    }, a.car.plate)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)'
      }
    }, a.doc, " \xB7 ", window.RR_DATE(a.date))), /*#__PURE__*/React.createElement(Badge, {
      tone: e.tone,
      status: e.status
    }, a.days < 0 ? 'Skaduar' : a.days + ' ditë'));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,3fr) minmax(0,2fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Kontratat e fundit",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => go('contracts')
    }, "T\xEB gjitha"),
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    onRowClick: openContract,
    rows: D.contracts.slice(0, 4),
    columns: [{
      key: 'nr',
      label: 'Nr.',
      mono: true,
      nowrap: true
    }, {
      key: 'client',
      label: 'Klienti'
    }, {
      key: 'car',
      label: 'Makina'
    }, {
      key: 'total',
      label: 'Total',
      align: 'right',
      mono: true,
      render: r => window.RR_FMT(r.total)
    }, {
      key: 'status',
      label: 'Statusi',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: window.RR_TONE(r.status),
        status: r.status
      }, r.label)
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Sot \xB7 11 Shtator",
    subtitle: "Dor\xEBzime dhe kthime"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['09:00', 'Dorëzim', 'VW Golf 8 · AB 456 CD', 'Elda Meta', 'reserved'], ['14:30', 'Kthim', 'Toyota Yaris · AA 123 BB', 'Arben Hoxha', 'active'], ['—', 'Kthim i vonuar', 'Dacia Duster · AA 789 EF', 'Gent Krasniqi', 'overdue']].map(([t, k, c, n, s]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-subtle)',
      width: 44
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--status-' + s + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, k, " \xB7 ", n), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)'
    }
  }, c))))))), /*#__PURE__*/React.createElement(Card, {
    title: "Shtator 2026",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => go('calendar')
    }, "Kalendari"),
    padding: 0
  }, /*#__PURE__*/React.createElement(CalendarGrid, {
    year: 2026,
    month: 9,
    today: 11,
    events: D.events.filter(e => e.y === 2026 && e.m === 9),
    style: {
      border: 0,
      borderRadius: 0
    }
  })));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Login.jsx
try { (() => {
const {
  Button,
  Field,
  Input,
  Checkbox,
  Radio
} = window.RinasRentDesignSystem_a23b91;
function Login({
  onLogin
}) {
  const [role, setRole] = React.useState('subject');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sidebar)',
      color: 'var(--text-on-dark)',
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.01em'
    }
  }, "Rinas", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amber-400)'
    }
  }, "Rent")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      maxWidth: 420
    }
  }, "Prenotime, kontrata dhe pagesa n\xEB nj\xEB vend."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--navy-200)',
      maxWidth: 420,
      fontSize: 'var(--text-md)',
      marginTop: 16
    }
  }, "P\xEBr t\xEB gjitha subjektet e makinave me qera n\xEB Rinas. \xC7do kontrat\xEB plot\xEBsohet online, ruhet dhe printohet.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 RinasRent")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin(role);
    },
    style: {
      width: '100%',
      maxWidth: 380,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)',
      fontWeight: 600
    }
  }, "Hyr n\xEB llogari"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, "Llogarit\xEB hapen nga administratori i Rinas.")), /*#__PURE__*/React.createElement(Field, {
    label: "P\xEBrdoruesi"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "user",
    defaultValue: role === 'admin' ? 'admin' : 'rinascars'
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Fjal\xEBkalimi"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "lock",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Roli (demo)"
  }, /*#__PURE__*/React.createElement(Radio, {
    inline: true,
    value: role,
    onChange: setRole,
    options: [{
      value: 'subject',
      label: 'Subjekt'
    }, {
      value: 'admin',
      label: 'Administrator'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "M\xEB mbaj t\xEB lidhur",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, "Harrove fjal\xEBkalimin?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Hyr"))));
}
Object.assign(window, {
  Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Notifications.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Switch,
  Checkbox,
  Field,
  Input,
  Select,
  DataTable,
  Tag
} = window.RinasRentDesignSystem_a23b91;
function Notifications({
  toast
}) {
  const [emails, setEmails] = React.useState(['info@rinascars.al', 'klajdi@rinascars.al']);
  const log = [{
    id: 1,
    date: '11.09.2026 08:00',
    to: 'info@rinascars.al',
    subject: 'Kolaudimi skadon në 24 ditë — Toyota Yaris AA 123 BB',
    status: 'active',
    label: 'Dërguar'
  }, {
    id: 2,
    date: '09.09.2026 08:00',
    to: 'info@rinascars.al',
    subject: 'Kasko skadon në 19 ditë — Toyota Yaris AA 123 BB',
    status: 'active',
    label: 'Dërguar'
  }, {
    id: 3,
    date: '02.09.2026 08:00',
    to: 'info@rinascars.al',
    subject: 'Kolaudimi ka skaduar — Dacia Duster AA 789 EF',
    status: 'overdue',
    label: 'Dërguar · pa veprim'
  }, {
    id: 4,
    date: '31.08.2026 08:00',
    to: 'info@rinascars.al',
    subject: 'Siguracioni skadon në 30 ditë — VW Golf 8 AB 456 CD',
    status: 'active',
    label: 'Dërguar'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,3fr) minmax(0,2fr)',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Njoftime me email",
    subtitle: "P\xEBr skadencat e mjeteve (kolaudim, siguracion, kasko, taks\xEB)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "D\xEBrgo njoftime me email",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Kur t\xEB d\xEBrgohet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "30 dit\xEB p\xEBrpara",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "7 dit\xEB p\xEBrpara",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Dit\xEBn e skadenc\xEBs",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\xC7do jav\xEB pas skadimit"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Ora e d\xEBrgimit"
  }, /*#__PURE__*/React.createElement(Select, {
    style: {
      maxWidth: 160
    },
    defaultValue: "08:00",
    options: ['06:00', '08:00', '10:00', '18:00']
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Marr\xEBsit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 10
    }
  }, emails.map(e => /*#__PURE__*/React.createElement(Tag, {
    key: e,
    onRemove: () => setEmails(emails.filter(x => x !== e))
  }, e))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "mail",
    placeholder: "email@subjekt.al",
    id: "newmail"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      const el = document.getElementById('newmail');
      if (el.value) {
        setEmails([...emails, el.value]);
        el.value = '';
      }
    }
  }, "Shto"))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "D\xEBrgo kopje edhe administratorit t\xEB Rinas"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Historiku i d\xEBrgimeve",
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    rows: log,
    columns: [{
      key: 'date',
      label: 'Data',
      mono: true,
      nowrap: true
    }, {
      key: 'subject',
      label: 'Subjekti i emailit'
    }, {
      key: 'to',
      label: 'Për',
      mono: true
    }, {
      key: 'status',
      label: '',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: window.RR_TONE(r.status),
        status: r.status
      }, r.label)
    }]
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Pamja e emailit",
    subtitle: "K\xEBshtu duket njoftimi q\xEB merr subjekti",
    padding: 0,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      icon: "send",
      onClick: () => toast({
        tone: 'success',
        title: 'Email testues u dërgua',
        message: emails[0]
      })
    }, "D\xEBrgo test")
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Email",
    src: "emails/Njoftim-Skadence.html",
    style: {
      width: '100%',
      height: 720,
      border: 0,
      display: 'block',
      background: '#eef0f4'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "save",
    onClick: () => toast({
      tone: 'success',
      title: 'Cilësimet u ruajtën'
    })
  }, "Ruaj cil\xEBsimet")));
}
Object.assign(window, {
  Notifications
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Notifications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Payments.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  DataTable,
  StatCard,
  Dialog,
  Field,
  Input,
  Select
} = window.RinasRentDesignSystem_a23b91;
function Payments({
  toast
}) {
  const D = window.RR_DATA;
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "P\xEBr ark\xEBtim \xB7 Shtator",
    value: window.RR_FMT(46800) + ' ALL',
    icon: "wallet"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "N\xEB vones\xEB",
    value: window.RR_FMT(10400) + ' ALL',
    delta: "1 k\xEBst \xB7 8 dit\xEB",
    deltaTone: "down",
    icon: "alert-triangle"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Ark\xEBtuar \xB7 Shtator",
    value: window.RR_FMT(139600) + ' ALL',
    deltaTone: "up",
    delta: "+12% nga gushti",
    icon: "banknote"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "K\xEBstet",
    subtitle: "T\xEB gjitha kontratat me pages\xEB me afat",
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: D.installments,
    columns: [{
      key: 'ktr',
      label: 'Kontrata',
      mono: true,
      nowrap: true
    }, {
      key: 'client',
      label: 'Klienti'
    }, {
      key: 'nr',
      label: 'Kësti',
      mono: true
    }, {
      key: 'due',
      label: 'Afati',
      mono: true
    }, {
      key: 'amount',
      label: 'Shuma (ALL)',
      align: 'right',
      mono: true,
      render: r => window.RR_FMT(r.amount)
    }, {
      key: 'status',
      label: 'Statusi',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: window.RR_TONE(r.status),
        status: r.status
      }, r.label)
    }, {
      key: 'a',
      label: '',
      align: 'right',
      render: r => r.status !== 'done' && /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: r.status === 'overdue' ? 'primary' : 'secondary',
        onClick: () => setOpen(r)
      }, "Ark\xEBto")
    }]
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: !!open,
    title: "Regjistro pages\xEB",
    onClose: () => setOpen(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpen(null)
    }, "Anulo"), /*#__PURE__*/React.createElement(Button, {
      icon: "check",
      onClick: () => {
        setOpen(null);
        toast({
          tone: 'success',
          title: 'Pagesa u regjistrua',
          message: open.ktr + ' · kësti ' + open.nr
        });
      }
    }, "Ruaj pages\xEBn"))
  }, open && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      padding: 12,
      background: 'var(--surface-sunken)',
      borderRadius: 4,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("b", null, open.client), " \xB7 ", open.ktr, " \xB7 k\xEBsti ", open.nr, " \xB7 afati ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, open.due)), /*#__PURE__*/React.createElement(Field, {
    label: "Shuma",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    suffix: "ALL",
    defaultValue: window.RR_FMT(open.amount)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Data"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    icon: "calendar",
    defaultValue: "11.09.2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "M\xEBnyra"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Cash', 'Kartë', 'Transfertë bankare']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Referenca"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "opsionale"
  })))));
}
Object.assign(window, {
  Payments
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Payments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/PrintContract.jsx
try { (() => {
const {
  Button
} = window.RinasRentDesignSystem_a23b91;
function PrintContract({
  contract,
  onBack
}) {
  const c = contract;
  const inst = window.RR_DATA.installments.filter(i => i.ktr === c.nr);
  const row = (k, v) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '6px 0',
      borderBottom: '1px solid var(--border-default)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 160,
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--gray-200)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 794,
      margin: '0 auto',
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-left",
    onClick: onBack
  }, "Kthehu"), /*#__PURE__*/React.createElement(Button, {
    icon: "printer",
    onClick: () => window.print(),
    style: {
      marginLeft: 'auto'
    }
  }, "Printo / Ruaj PDF")), /*#__PURE__*/React.createElement("article", {
    style: {
      width: 794,
      minHeight: 1000,
      margin: '0 auto',
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      padding: '56px 64px',
      boxSizing: 'border-box',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderBottom: '2px solid var(--navy-900)',
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--navy-900)'
    }
  }, c.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Aeroporti Nd\xEBrkomb\xEBtar i Tiran\xEBs, Rinas \xB7 NIPT L81234567A")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 16
    }
  }, "KONTRAT\xCB QIRAJE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, c.nr))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-subtle)',
      marginBottom: 6
    }
  }, "Qiramarr\xEBsi"), row('Emër Mbiemër', c.client), row('Nr. dokumenti', c.doc), row('Telefon', '+355 69 000 0000')), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-subtle)',
      marginBottom: 6
    }
  }, "Mjeti"), row('Makina', c.car), row('Marrja', c.from + ' 09:00'), row('Kthimi', c.to + ' 09:00'), row('Ditë', c.days))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-subtle)',
      marginBottom: 6
    }
  }, "Pagesa"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Kësti', 'Afati', 'Shuma (ALL)', 'Statusi'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: h.startsWith('Shuma') ? 'right' : 'left',
      padding: '6px 0',
      borderBottom: '1px solid var(--border-strong)',
      fontSize: 11,
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, (inst.length ? inst : [{
    id: 0,
    nr: '1/1',
    due: c.from,
    amount: c.total,
    label: 'Paguar'
  }]).map(i => /*#__PURE__*/React.createElement("tr", {
    key: i.id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '6px 0',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-mono)'
    }
  }, i.nr), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '6px 0',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-mono)'
    }
  }, i.due), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '6px 0',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-mono)',
      textAlign: 'right'
    }
  }, window.RR_FMT(i.amount)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '6px 0',
      borderBottom: '1px solid var(--border-default)'
    }
  }, i.label))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 2,
    style: {
      padding: '10px 0',
      fontWeight: 600
    }
  }, "Totali"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '10px 0',
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600
    }
  }, window.RR_FMT(c.total)), /*#__PURE__*/React.createElement("td", null))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 24,
      fontSize: 11.5,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-subtle)',
      marginBottom: 6
    }
  }, "Kushtet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "1. Qiramarr\xEBsi merr p\xEBrsip\xEBr p\xEBrdorimin e mjetit sipas ligjeve n\xEB fuqi. 2. Karburanti kthehet n\xEB t\xEB nj\xEBjtin nivel. 3. Vonesa n\xEB kthim faturohet me \xE7mimin ditor. 4. Depozita 20.000 ALL kthehet pas kontrollit t\xEB mjetit. 5. Kontrata ruhet elektronikisht n\xEB sistemin RinasRent.")), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      marginTop: 56
    }
  }, ['Qiradhënësi', 'Qiramarrësi'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      borderTop: '1px solid var(--gray-800)',
      paddingTop: 6,
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, s, " \xB7 n\xEBnshkrimi")))));
}
Object.assign(window, {
  PrintContract
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/PrintContract.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Shell.jsx
try { (() => {
const {
  SidebarNav,
  Topbar,
  IconButton,
  Button,
  Tooltip
} = window.RinasRentDesignSystem_a23b91;
function Shell({
  page,
  setPage,
  title,
  breadcrumb,
  actions,
  role,
  children
}) {
  const items = [{
    section: 'Operacione'
  }, {
    value: 'dashboard',
    label: 'Paneli',
    icon: 'layout-dashboard'
  }, {
    value: 'calendar',
    label: 'Kalendari',
    icon: 'calendar-days'
  }, {
    value: 'contracts',
    label: 'Kontratat',
    icon: 'file-text'
  }, {
    value: 'payments',
    label: 'Pagesat',
    icon: 'credit-card',
    count: 1
  }, {
    value: 'cars',
    label: 'Mjetet',
    icon: 'car',
    count: window.RR_ALERTS().length || undefined
  }, {
    section: 'Cilësime'
  }, {
    value: 'notifications',
    label: 'Njoftimet',
    icon: 'mail'
  }];
  if (role === 'admin') items.push({
    section: 'Administrim'
  }, {
    value: 'subjects',
    label: 'Subjektet',
    icon: 'building-2'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    brand: /*#__PURE__*/React.createElement("span", null, "Rinas", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--amber-400)'
      }
    }, "Rent")),
    value: page,
    onChange: setPage,
    items: items,
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh'
    },
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px',
        borderTop: '1px solid oklch(100% 0 0 / 0.1)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'var(--navy-600)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12,
        fontWeight: 700
      }
    }, role === 'admin' ? 'AD' : 'RC'), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, role === 'admin' ? 'Administratori' : 'Rinas Cars sh.p.k.'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-on-dark-muted)'
      }
    }, role === 'admin' ? 'Rinas · të gjitha subjektet' : 'Subjekt · Rinas')), /*#__PURE__*/React.createElement(IconButton, {
      icon: "log-out",
      label: "Dil",
      variant: "dark",
      size: "sm",
      onClick: () => setPage('login')
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title,
    breadcrumb: breadcrumb,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, actions, /*#__PURE__*/React.createElement(Tooltip, {
      content: "Njoftime"
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      label: "Njoftime",
      variant: "outline"
    }))),
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--content-max)',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, children)));
}
Object.assign(window, {
  Shell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/Subjects.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  DataTable,
  Switch,
  Dialog,
  Field,
  Input,
  Tag
} = window.RinasRentDesignSystem_a23b91;
function Subjects({
  toast
}) {
  const [rows, setRows] = React.useState(window.RR_DATA.subjects);
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      maxWidth: 560
    }
  }, "\xC7do subjekt ka llogarin\xEB e vet dhe sheh vet\xEBm makinat, prenotimet dhe kontratat e tij. Llogarit\xEB hapen vet\xEBm nga administratori."), /*#__PURE__*/React.createElement(Button, {
    icon: "plus",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => setOpen(true)
  }, "Subjekt i ri")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(DataTable, {
    rows: rows,
    columns: [{
      key: 'name',
      label: 'Subjekti',
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600
        }
      }, r.name), /*#__PURE__*/React.createElement("div", {
        style: {
          color: 'var(--text-subtle)',
          fontSize: 12,
          fontFamily: 'var(--font-mono)'
        }
      }, "NIPT ", r.nipt))
    }, {
      key: 'user',
      label: 'Përdoruesi',
      mono: true
    }, {
      key: 'cars',
      label: 'Makina',
      align: 'right',
      mono: true
    }, {
      key: 'contracts',
      label: 'Kontrata',
      align: 'right',
      mono: true
    }, {
      key: 'active',
      label: 'Llogaria',
      render: r => /*#__PURE__*/React.createElement(Switch, {
        checked: r.active,
        label: /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            color: 'var(--text-muted)'
          }
        }, r.active ? 'Aktive' : 'Pezulluar'),
        onChange: v => setRows(rows.map(x => x.id === r.id ? {
          ...x,
          active: v
        } : x))
      })
    }, {
      key: 'a',
      label: '',
      align: 'right',
      render: () => /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "ghost",
        icon: "key-round"
      }, "Rivendos fjal\xEBkalimin")
    }]
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Hap llogari p\xEBr subjekt",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Anulo"), /*#__PURE__*/React.createElement(Button, {
      icon: "check",
      onClick: () => {
        setOpen(false);
        toast({
          tone: 'success',
          title: 'Llogaria u krijua',
          message: 'Kredencialet u dërguan me email.'
        });
      }
    }, "Krijo llogarin\xEB"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Emri i subjektit",
    required: true,
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Emri sh.p.k."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "NIPT",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "L81234567A"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "P\xEBrdoruesi",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "emri"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "mail",
    placeholder: "info@subjekt.al"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Telefon"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "phone",
    placeholder: "+355 4 000 0000"
  })))));
}
Object.assign(window, {
  Subjects
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/Subjects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rinas-rent/data.js
try { (() => {
window.RR_DATA = {
  cars: [{
    id: 1,
    name: 'Toyota Yaris',
    plate: 'AA 123 BB',
    vin: 'JTDKB20U1234567',
    year: 2022,
    cls: 'Ekonomike',
    price: 3500,
    status: 'active',
    km: 48200,
    kolaudim: '2026-10-05',
    siguracion: '2027-02-14',
    kasko: '2026-09-28',
    taksa: '2026-12-31'
  }, {
    id: 2,
    name: 'VW Golf 8',
    plate: 'AB 456 CD',
    vin: 'WVWZZZCDZ1234567',
    year: 2023,
    cls: 'Kompakte',
    price: 4500,
    status: 'reserved',
    km: 31900,
    kolaudim: '2027-03-12',
    siguracion: '2026-09-30',
    kasko: '2026-09-30',
    taksa: '2026-12-31'
  }, {
    id: 3,
    name: 'Dacia Duster',
    plate: 'AA 789 EF',
    vin: 'UU1HSDCVG1234567',
    year: 2021,
    cls: 'SUV',
    price: 5200,
    status: 'overdue',
    km: 76400,
    kolaudim: '2026-09-02',
    siguracion: '2027-01-20',
    kasko: null,
    taksa: '2026-12-31'
  }, {
    id: 4,
    name: 'Mercedes C220',
    plate: 'AB 321 GH',
    vin: 'WDD2050421234567',
    year: 2022,
    cls: 'Premium',
    price: 9000,
    status: 'done',
    km: 39800,
    kolaudim: '2027-05-18',
    siguracion: '2027-04-02',
    kasko: '2027-04-02',
    taksa: '2026-12-31'
  }, {
    id: 5,
    name: 'Hyundai i20',
    plate: 'AA 654 IJ',
    vin: 'NLHB251AAMZ12345',
    year: 2020,
    cls: 'Ekonomike',
    price: 3200,
    status: 'done',
    km: 91200,
    kolaudim: '2026-11-22',
    siguracion: '2026-10-08',
    kasko: null,
    taksa: '2026-12-31'
  }],
  contracts: [{
    id: 1,
    nr: 'KTR-2026-0148',
    client: 'Arben Hoxha',
    doc: 'J12345678K',
    car: 'Toyota Yaris · AA 123 BB',
    from: '10.09.2026',
    to: '14.09.2026',
    days: 4,
    total: 14000,
    paid: 7000,
    plan: 2,
    status: 'active',
    label: 'Aktive',
    subject: 'Rinas Cars sh.p.k.'
  }, {
    id: 2,
    nr: 'KTR-2026-0147',
    client: 'Elda Meta',
    doc: 'K98765432L',
    car: 'VW Golf 8 · AB 456 CD',
    from: '12.09.2026',
    to: '18.09.2026',
    days: 6,
    total: 27000,
    paid: 9000,
    plan: 3,
    status: 'reserved',
    label: 'Rezervuar',
    subject: 'AutoRent Tirana'
  }, {
    id: 3,
    nr: 'KTR-2026-0141',
    client: 'Gent Krasniqi',
    doc: 'I11223344M',
    car: 'Dacia Duster · AA 789 EF',
    from: '03.09.2026',
    to: '09.09.2026',
    days: 6,
    total: 31200,
    paid: 10400,
    plan: 3,
    status: 'overdue',
    label: 'Vonesë',
    subject: 'Rinas Cars sh.p.k.'
  }, {
    id: 4,
    nr: 'KTR-2026-0139',
    client: 'Mira Dervishi',
    doc: 'H55667788N',
    car: 'Mercedes C220 · AB 321 GH',
    from: '28.08.2026',
    to: '02.09.2026',
    days: 5,
    total: 45000,
    paid: 45000,
    plan: 1,
    status: 'done',
    label: 'Mbyllur',
    subject: 'Blue Sky Rent'
  }, {
    id: 5,
    nr: 'KTR-2026-0136',
    client: 'Klodian Shehu',
    doc: 'G99887766P',
    car: 'Hyundai i20 · AA 654 IJ',
    from: '22.08.2026',
    to: '29.08.2026',
    days: 7,
    total: 22400,
    paid: 22400,
    plan: 2,
    status: 'done',
    label: 'Mbyllur',
    subject: 'AutoRent Tirana'
  }],
  installments: [{
    id: 1,
    ktr: 'KTR-2026-0148',
    client: 'Arben Hoxha',
    nr: '2/2',
    due: '24.09.2026',
    amount: 7000,
    status: 'reserved',
    label: 'Në pritje'
  }, {
    id: 2,
    ktr: 'KTR-2026-0147',
    client: 'Elda Meta',
    nr: '2/3',
    due: '12.10.2026',
    amount: 9000,
    status: 'reserved',
    label: 'Në pritje'
  }, {
    id: 3,
    ktr: 'KTR-2026-0147',
    client: 'Elda Meta',
    nr: '3/3',
    due: '11.11.2026',
    amount: 9000,
    status: 'reserved',
    label: 'Në pritje'
  }, {
    id: 4,
    ktr: 'KTR-2026-0141',
    client: 'Gent Krasniqi',
    nr: '2/3',
    due: '03.09.2026',
    amount: 10400,
    status: 'overdue',
    label: 'Vonesë 8 ditë'
  }, {
    id: 5,
    ktr: 'KTR-2026-0141',
    client: 'Gent Krasniqi',
    nr: '3/3',
    due: '03.10.2026',
    amount: 10400,
    status: 'reserved',
    label: 'Në pritje'
  }, {
    id: 6,
    ktr: 'KTR-2026-0139',
    client: 'Mira Dervishi',
    nr: '1/1',
    due: '28.08.2026',
    amount: 45000,
    status: 'done',
    label: 'Paguar'
  }],
  subjects: [{
    id: 1,
    name: 'Rinas Cars sh.p.k.',
    nipt: 'L81234567A',
    user: 'rinascars',
    cars: 8,
    contracts: 42,
    active: true
  }, {
    id: 2,
    name: 'AutoRent Tirana',
    nipt: 'M02345678B',
    user: 'autorent',
    cars: 6,
    contracts: 31,
    active: true
  }, {
    id: 3,
    name: 'Blue Sky Rent',
    nipt: 'K93456789C',
    user: 'bluesky',
    cars: 5,
    contracts: 19,
    active: true
  }, {
    id: 4,
    name: 'Albania Drive',
    nipt: 'L74567890D',
    user: 'aldrive',
    cars: 3,
    contracts: 4,
    active: false
  }],
  events: [{
    id: 1,
    carId: 1,
    y: 2026,
    m: 9,
    label: 'Yaris · A. Hoxha',
    from: 10,
    to: 14,
    status: 'active'
  }, {
    id: 2,
    carId: 2,
    y: 2026,
    m: 9,
    label: 'Golf · E. Meta',
    from: 12,
    to: 18,
    status: 'reserved'
  }, {
    id: 3,
    carId: 3,
    y: 2026,
    m: 9,
    label: 'Duster · G. Krasniqi',
    from: 3,
    to: 9,
    status: 'overdue'
  }, {
    id: 4,
    carId: 4,
    y: 2026,
    m: 9,
    label: 'C220 · M. Dervishi',
    from: 1,
    to: 2,
    status: 'done'
  }, {
    id: 5,
    carId: 5,
    y: 2026,
    m: 9,
    label: 'i20 · B. Rama',
    from: 20,
    to: 25,
    status: 'reserved'
  }, {
    id: 6,
    carId: 1,
    y: 2026,
    m: 9,
    label: 'Yaris · L. Kola',
    from: 16,
    to: 19,
    status: 'reserved'
  }, {
    id: 7,
    carId: 4,
    y: 2026,
    m: 8,
    label: 'C220 · M. Dervishi',
    from: 28,
    to: 31,
    status: 'done'
  }, {
    id: 8,
    carId: 5,
    y: 2026,
    m: 8,
    label: 'i20 · K. Shehu',
    from: 22,
    to: 29,
    status: 'done'
  }, {
    id: 9,
    carId: 2,
    y: 2026,
    m: 8,
    label: 'Golf · D. Prifti',
    from: 4,
    to: 11,
    status: 'done'
  }, {
    id: 10,
    carId: 3,
    y: 2026,
    m: 10,
    label: 'Duster · A. Zeneli',
    from: 2,
    to: 6,
    status: 'reserved'
  }, {
    id: 11,
    carId: 1,
    y: 2026,
    m: 10,
    label: 'Yaris · S. Bardhi',
    from: 14,
    to: 21,
    status: 'reserved'
  }, {
    id: 12,
    carId: 4,
    y: 2026,
    m: 10,
    label: 'C220 · R. Gjoka',
    from: 24,
    to: 27,
    status: 'reserved'
  }]
};
window.RR_FMT = n => n.toLocaleString('de-DE');
window.RR_TONE = s => s === 'active' ? 'success' : s === 'reserved' ? 'warning' : s === 'overdue' ? 'danger' : 'neutral';

// Expiry helpers — TODAY is the demo date. Notify 30 days before.
window.RR_TODAY = new Date(2026, 8, 11);
window.RR_DAYS = iso => iso ? Math.round((new Date(iso) - window.RR_TODAY) / 86400000) : null;
window.RR_DATE = iso => iso ? iso.split('-').reverse().join('.') : '—';
window.RR_EXP = iso => {
  const n = window.RR_DAYS(iso);
  if (n === null) return {
    tone: 'neutral',
    status: 'done',
    label: 'Pa të dhëna'
  };
  if (n < 0) return {
    tone: 'danger',
    status: 'overdue',
    label: 'Skaduar ' + -n + ' ditë'
  };
  if (n <= 30) return {
    tone: 'warning',
    status: 'reserved',
    label: 'Skadon në ' + n + ' ditë'
  };
  return {
    tone: 'success',
    status: 'active',
    label: 'Në rregull'
  };
};
window.RR_DOCS = [['kolaudim', 'Kolaudimi'], ['siguracion', 'Siguracioni TPL'], ['kasko', 'Kasko'], ['taksa', 'Taksa vjetore']];
window.RR_ALERTS = () => {
  const out = [];
  window.RR_DATA.cars.forEach(c => window.RR_DOCS.forEach(([k, l]) => {
    const n = window.RR_DAYS(c[k]);
    if (n !== null && n <= 30) out.push({
      id: c.id + k,
      car: c,
      key: k,
      doc: l,
      days: n,
      date: c[k]
    });
  }));
  return out.sort((a, b) => a.days - b.days);
};
window.RR_MONTHS = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rinas-rent/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CalendarGrid = __ds_scope.CalendarGrid;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Topbar = __ds_scope.Topbar;

})();
