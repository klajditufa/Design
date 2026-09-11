import React from 'react';
/** Lucide icon via the lucide UMD bundle (window.lucide). name is kebab-case e.g. "car", "calendar-days". */
export function Icon({ name, size = 18, strokeWidth = 1.75, color = 'currentColor', style, ...rest }) {
  const html = React.useMemo(() => {
    const L = typeof window !== 'undefined' && window.lucide;
    if (!L) return '';
    const pascal = name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
    const node = L.icons && L.icons[pascal];
    if (!node) return '';
    try { const el = L.createElement(node); el.setAttribute('width', size); el.setAttribute('height', size); el.setAttribute('stroke-width', strokeWidth); return el.outerHTML; } catch (e) { return ''; }
  }, [name, size, strokeWidth]);
  return <span aria-hidden="true" style={{ display: 'inline-flex', width: size, height: size, color, flex: 'none', lineHeight: 0, ...style }} dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
}
