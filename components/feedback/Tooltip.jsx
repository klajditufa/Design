import React from 'react';
export function Tooltip({ content, children, side = 'top' }) {
  const [on, setOn] = React.useState(false);
  const pos = side === 'bottom' ? { top: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' } : { bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' };
  return <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)}>
    {children}
    {on && <span role="tooltip" style={{ position: 'absolute', ...pos, background: 'var(--gray-900)', color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 500, padding: '5px 8px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', zIndex: 50, boxShadow: 'var(--shadow-md)' }}>{content}</span>}
  </span>;
}
