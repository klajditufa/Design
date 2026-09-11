import React from 'react';
export function Radio({ options = [], value, defaultValue, onChange, name, inline, style }) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  return <div role="radiogroup" style={{ display: 'flex', flexDirection: inline ? 'row' : 'column', gap: inline ? 20 : 10, flexWrap: 'wrap', ...style }}>
    {options.map(o => { const opt = typeof o === 'string' ? { value: o, label: o } : o; const on = cur === opt.value;
      return <label key={opt.value} onClick={() => { setInner(opt.value); onChange && onChange(opt.value); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 'var(--text-base)', userSelect: 'none' }}>
        <span role="radio" aria-checked={on} style={{ width: 18, height: 18, borderRadius: '50%', border: (on ? 5 : 1) + 'px solid ' + (on ? 'var(--color-primary)' : 'var(--border-strong)'), background: '#fff', boxSizing: 'border-box', transition: 'border var(--dur-fast)' }} />
        <span>{opt.label}{opt.hint && <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginLeft: 6 }}>{opt.hint}</span>}</span>
      </label>; })}
  </div>;
}
