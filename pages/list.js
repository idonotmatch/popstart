import React, { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';
import { useList } from '../context/ListContext';

// ─── Default column definitions ───────────────────────────────────────────────
const DEFAULT_COLUMNS = [
  { key: 'image_url',         label: 'Image',        width: 80,  visible: true,  editable: false, type: 'image' },
  { key: 'name',              label: 'Name',         width: 260, visible: true,  editable: true,  type: 'text' },
  { key: 'price',             label: 'Price',        width: 90,  visible: true,  editable: false, type: 'price' },
  { key: 'quantity',          label: 'Qty',          width: 60,  visible: true,  editable: true,  type: 'number' },
  { key: 'subtotal',          label: 'Subtotal',     width: 90,  visible: true,  editable: false, type: 'price' },
  { key: 'notes',             label: 'Notes',        width: 200, visible: true,  editable: true,  type: 'text' },
  { key: 'rating',            label: 'Rating',       width: 80,  visible: true,  editable: false, type: 'text' },
  { key: 'review_count',      label: 'Reviews',      width: 80,  visible: true,  editable: false, type: 'number' },
  { key: 'source',            label: 'Source',       width: 90,  visible: true,  editable: false, type: 'source' },
  { key: 'brand',             label: 'Brand',        width: 120, visible: false, editable: false, type: 'text' },
  { key: 'availability',      label: 'Availability', width: 110, visible: false, editable: false, type: 'text' },
  { key: 'product_category',  label: 'Category',     width: 120, visible: false, editable: false, type: 'text' },
  { key: 'model',             label: 'Model',        width: 100, visible: false, editable: false, type: 'text' },
  { key: 'shipping_price',    label: 'Ship. Price',  width: 90,  visible: false, editable: false, type: 'price' },
  { key: 'shipping_time',     label: 'Ship. Time',   width: 100, visible: false, editable: false, type: 'text' },
  { key: 'product_id',        label: 'Product ID',   width: 120, visible: false, editable: false, type: 'text' },
  { key: 'country_of_origin', label: 'Origin',       width: 100, visible: false, editable: false, type: 'text' },
];

const SOURCE_COLORS = { amazon: '#FF9900', walmart: '#0071CE' };

// Build an Amazon multi-item cart URL from a list of items.
// Uses the affiliate tag if set via NEXT_PUBLIC_AMAZON_AFFILIATE_TAG.
function buildAmazonCartUrl(items) {
  const amazonItems = items.filter(
    i => i.source === 'amazon' && /^[A-Z0-9]{10}$/.test(i.product_id || '')
  );
  if (amazonItems.length === 0) return null;
  const params = new URLSearchParams();
  amazonItems.forEach((item, idx) => {
    params.set(`ASIN.${idx + 1}`, item.product_id);
    params.set(`Quantity.${idx + 1}`, String(item.quantity || 1));
  });
  const tag = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG;
  if (tag) params.set('tag', tag);
  return `https://www.amazon.com/gp/aws/cart/add.html?${params.toString()}`;
}

const fmt = (price) => {
  const n = parseFloat(price);
  return isNaN(n) ? '—' : `$${n.toFixed(2)}`;
};

// ─── Inline editable cell ─────────────────────────────────────────────────────
function EditableCell({ value, type, onSave }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value ?? '');
  const inputRef = useRef(null);

  useEffect(() => { setDraft(value ?? ''); }, [value]);
  useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);

  const commit = () => {
    setEditing(false);
    if (String(draft) !== String(value ?? '')) onSave(draft);
  };

  if (!editing) {
    return (
      <div className="editable-cell editable-cell-hover" onClick={() => setEditing(true)}>
        {draft !== '' && draft != null ? draft : <span className="cell-placeholder">click to edit</span>}
      </div>
    );
  }

  return type === 'number' ? (
    <input ref={inputRef} type="number" min="1" className="cell-input"
      value={draft} onChange={e => setDraft(e.target.value)}
      onBlur={commit} onKeyDown={e => { if (e.key === 'Enter') commit(); if (e.key === 'Escape') setEditing(false); }} />
  ) : (
    <input ref={inputRef} type="text" className="cell-input"
      value={draft} onChange={e => setDraft(e.target.value)}
      onBlur={commit} onKeyDown={e => { if (e.key === 'Enter') commit(); if (e.key === 'Escape') setEditing(false); }} />
  );
}

// ─── Row expand panel ─────────────────────────────────────────────────────────
function RowPanel({ item, onClose }) {
  const fields = [
    ['Brand', item.brand],
    ['Price', fmt(item.price)],
    ['Rating', item.rating ? `${item.rating} ★` : null],
    ['Reviews', item.review_count?.toLocaleString()],
    ['Availability', item.availability],
    ['Category', item.product_category],
    ['Model', item.model],
    ['Shipping Price', fmt(item.shipping_price)],
    ['Shipping Time', item.shipping_time],
    ['Origin', item.country_of_origin],
    ['Source', item.source],
  ].filter(([, v]) => v && v !== '—');

  const bullets = (() => {
    try {
      return Array.isArray(item.feature_bullets)
        ? item.feature_bullets
        : JSON.parse(item.feature_bullets || '[]');
    } catch { return []; }
  })();

  return (
    <div className="row-panel-overlay" onClick={onClose}>
      <div className="row-panel" onClick={e => e.stopPropagation()}>
        <button className="row-panel-close" onClick={onClose}>✕</button>
        <div className="row-panel-header">
          {item.image_url && <img src={item.image_url} alt={item.name} className="row-panel-img" />}
          <div className="row-panel-header-text">
            <div className="row-panel-title">{item.name}</div>
            {item.product_url && (
              <a href={item.product_url} target="_blank" rel="noreferrer" className="row-panel-link">
                View on {item.source} ↗
              </a>
            )}
          </div>
        </div>
        <div className="row-panel-body">
          {fields.map(([label, val]) => (
            <div key={label} className="row-panel-field">
              <span className="row-panel-label">{label}</span>
              <span className="row-panel-value">{val}</span>
            </div>
          ))}
          {bullets.length > 0 && (
            <div className="row-panel-field row-panel-field-block">
              <span className="row-panel-label">Features</span>
              <ul className="row-panel-bullets">
                {bullets.slice(0, 6).map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main list page ───────────────────────────────────────────────────────────
export default function ListPage() {
  const { user, isLoading: authLoading } = useUser();
  const router = useRouter();
  const { list, removeFromList, updateQuantity, addNote, refreshList, clearList, isRefreshing, lastRefresh } = useList();

  const [columns, setColumns]           = useState(DEFAULT_COLUMNS);
  const [customColumns, setCustomColumns] = useState([]);
  const [customCells, setCustomCells]   = useState({});
  const [sortConfig, setSortConfig]     = useState({ key: null, dir: 'asc' });
  const [expandedItem, setExpandedItem] = useState(null);
  const [showColumnMenu, setShowColumnMenu] = useState(false);
  const [addColName, setAddColName]     = useState('');
  const [addColType, setAddColType]     = useState('text');
  const [dragOverIdx, setDragOverIdx]   = useState(null);
  const [dragRowIdx, setDragRowIdx]     = useState(null);
  const [items, setItems]               = useState([]);
  const colMenuRef = useRef(null);
  const resizingCol = useRef(null);

  // Auth guard
  useEffect(() => {
    if (!authLoading && !user) {
      sessionStorage.setItem('returnTo', router.asPath);
      router.push('/login');
    }
  }, [user, authLoading, router]);

  // Sync items from context
  useEffect(() => { setItems([...list.items]); }, [list.items]);

  // Load preferences + custom columns
  useEffect(() => {
    if (!user) return;
    fetch('/api/list/preferences').then(r => r.json()).then(({ column_config }) => {
      if (column_config?.length) setColumns(column_config);
    });
    fetch('/api/list/custom-columns').then(r => r.json()).then(cols => {
      setCustomColumns(Array.isArray(cols) ? cols : []);
    });
    fetch('/api/list/custom-cells').then(r => r.json()).then(cells => {
      if (!Array.isArray(cells)) return;
      const map = {};
      cells.forEach(c => { map[`${c.product_id}__${c.source}__${c.column_id}`] = c.value; });
      setCustomCells(map);
    });
  }, [user]);

  const savePrefs = useCallback((cols) => {
    fetch('/api/list/preferences', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ column_config: cols }),
    });
  }, []);

  // Close column menu on outside click
  useEffect(() => {
    const h = (e) => { if (colMenuRef.current && !colMenuRef.current.contains(e.target)) setShowColumnMenu(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  // Sort
  const handleSort = (key) => setSortConfig(prev => ({
    key, dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc',
  }));

  const sortedItems = [...items].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let av = a[sortConfig.key], bv = b[sortConfig.key];
    if (av == null) return 1; if (bv == null) return -1;
    if (typeof av === 'number') return sortConfig.dir === 'asc' ? av - bv : bv - av;
    return sortConfig.dir === 'asc' ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
  });

  // Column toggle
  const toggleColumn = (key) => {
    const next = columns.map(c => c.key === key ? { ...c, visible: !c.visible } : c);
    setColumns(next); savePrefs(next);
  };

  // Add custom column
  const handleAddColumn = async () => {
    if (!addColName.trim()) return;
    const res = await fetch('/api/list/custom-columns', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: addColName.trim(), col_type: addColType }),
    });
    const col = await res.json();
    setCustomColumns(prev => [...prev, col]);
    setAddColName('');
  };

  // Delete custom column
  const handleDeleteCustomCol = async (id) => {
    await fetch(`/api/list/custom-columns?id=${id}`, { method: 'DELETE' });
    setCustomColumns(prev => prev.filter(c => c.id !== id));
    setCustomCells(prev => {
      const next = { ...prev };
      Object.keys(next).filter(k => k.endsWith(`__${id}`)).forEach(k => delete next[k]);
      return next;
    });
  };

  // Custom cell save
  const saveCustomCell = async (item, colId, value) => {
    const key = `${item.product_id}__${item.source}__${colId}`;
    setCustomCells(prev => ({ ...prev, [key]: value }));
    await fetch('/api/list/custom-cells', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id: item.product_id, source: item.source, column_id: colId, value }),
    });
  };

  // Column resize
  const startResize = (e, colKey) => {
    e.preventDefault(); e.stopPropagation();
    const startX = e.clientX;
    const startWidth = columns.find(c => c.key === colKey)?.width || 100;
    const onMove = (mv) => {
      const newWidth = Math.max(50, startWidth + mv.clientX - startX);
      setColumns(prev => prev.map(c => c.key === colKey ? { ...c, width: newWidth } : c));
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      setColumns(prev => { savePrefs(prev); return prev; });
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  // Row drag-and-drop
  const handleRowDrop = async (dropIdx) => {
    if (dragRowIdx === null || dragRowIdx === dropIdx) { setDragRowIdx(null); setDragOverIdx(null); return; }
    const next = [...sortedItems];
    const [moved] = next.splice(dragRowIdx, 1);
    next.splice(dropIdx, 0, moved);
    setItems(next);
    setDragRowIdx(null); setDragOverIdx(null);
    await fetch('/api/list/reorder', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderedIds: next.map(i => ({ product_id: i.product_id, source: i.source })) }),
    });
  };

  // Render cell
  const renderCell = (item, col) => {
    switch (col.type) {
      case 'image':
        return item.image_url
          ? <img src={item.image_url} alt={item.name} className="list-img" onClick={() => setExpandedItem(item)} title="Click to expand" />
          : <span className="cell-placeholder">—</span>;
      case 'price':
        return col.key === 'subtotal'
          ? <strong>{fmt((parseFloat(item.price) || 0) * (item.quantity || 1))}</strong>
          : <span>{fmt(item[col.key])}</span>;
      case 'source':
        return (
          <a href={item.product_url} target="_blank" rel="noreferrer" className="source-chip"
            style={{ backgroundColor: SOURCE_COLORS[item.source] || '#888' }}>
            {item.source}
          </a>
        );
      default:
        if (!col.editable) return <span>{item[col.key] ?? '—'}</span>;
        return (
          <EditableCell
            value={col.key === 'notes' ? item.notes : item[col.key]}
            type={col.type}
            onSave={val => col.key === 'notes' ? addNote(item, val) : updateQuantity(item, parseInt(val) || 1)}
          />
        );
    }
  };

  // Totals
  const totalPrice = items.reduce((s, i) => s + (parseFloat(i.price) || 0) * (i.quantity || 1), 0);
  const bySource = items.reduce((acc, i) => {
    acc[i.source] = (acc[i.source] || 0) + (parseFloat(i.price) || 0) * (i.quantity || 1);
    return acc;
  }, {});

  const visibleCols = columns.filter(c => c.visible);

  if (authLoading) return null;

  // Empty state
  if (!items.length) {
    return (
      <div className="page-container">
        <Head><title>My List | Curious Trio</title></Head>
        <Header />
        <div className="list-empty-state">
          <div className="list-empty-icon">📋</div>
          <h2>Your list is empty</h2>
          <p>Search for products and add them to compare prices and track details.</p>
          <Link href="/" className="list-empty-cta">Start searching →</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="list-page-container">
      <Head><title>My List ({items.length}) | Curious Trio</title></Head>
      <Header />

      {/* Toolbar */}
      <div className="list-toolbar">
        <div className="list-toolbar-left">
          <span className="list-count">{items.length} item{items.length !== 1 ? 's' : ''}</span>
          {lastRefresh && <span className="list-refresh-time">Updated {new Date(lastRefresh).toLocaleTimeString()}</span>}
        </div>
        <div className="list-toolbar-right">
          <button className="toolbar-btn" onClick={refreshList} disabled={isRefreshing}>
            {isRefreshing ? 'Refreshing…' : '↻ Refresh prices'}
          </button>

          {(() => {
            const cartUrl = buildAmazonCartUrl(items);
            return cartUrl ? (
              <a href={cartUrl} target="_blank" rel="noreferrer" className="toolbar-btn toolbar-btn-amazon">
                🛒 Add to Amazon cart
              </a>
            ) : null;
          })()}

          <div className="col-menu-wrapper" ref={colMenuRef}>
            <button className="toolbar-btn" onClick={() => setShowColumnMenu(v => !v)}>⊞ Columns</button>
            {showColumnMenu && (
              <div className="col-menu">
                <div className="col-menu-section-title">Built-in columns</div>
                {columns.map(col => (
                  <label key={col.key} className="col-menu-item">
                    <input type="checkbox" checked={col.visible} onChange={() => toggleColumn(col.key)} />
                    {col.label}
                  </label>
                ))}
                <div className="col-menu-divider" />
                <div className="col-menu-section-title">Custom columns</div>
                {customColumns.length === 0 && <div className="col-menu-empty">No custom columns yet</div>}
                {customColumns.map(col => (
                  <div key={col.id} className="col-menu-item col-menu-custom">
                    <span className="custom-col-name">{col.name}</span>
                    <span className="col-type-tag">{col.col_type}</span>
                    <button className="col-delete-btn" onClick={() => handleDeleteCustomCol(col.id)}>✕</button>
                  </div>
                ))}
                <div className="col-menu-add">
                  <input type="text" placeholder="Column name…" value={addColName}
                    onChange={e => setAddColName(e.target.value)} className="col-add-input"
                    onKeyDown={e => e.key === 'Enter' && handleAddColumn()} />
                  <select value={addColType} onChange={e => setAddColType(e.target.value)} className="col-add-type">
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="url">URL</option>
                  </select>
                  <button className="col-add-btn" onClick={handleAddColumn}>+ Add</button>
                </div>
              </div>
            )}
          </div>

          <button className="toolbar-btn toolbar-btn-danger"
            onClick={() => { if (confirm('Clear your entire list?')) clearList(); }}>
            ✕ Clear
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="list-table-wrapper">
        <table className="at-table">
          <thead>
            <tr>
              <th className="at-th at-th-drag" />
              <th className="at-th at-th-expand" />
              {visibleCols.map(col => (
                <th key={col.key} className="at-th" style={{ width: col.width, minWidth: col.width }}
                  onClick={() => handleSort(col.key)}>
                  <div className="at-th-inner">
                    {col.label}
                    {sortConfig.key === col.key && <span className="sort-indicator">{sortConfig.dir === 'asc' ? ' ▲' : ' ▼'}</span>}
                  </div>
                  <div className="col-resize-handle" onMouseDown={e => startResize(e, col.key)} />
                </th>
              ))}
              {customColumns.map(col => (
                <th key={`custom-${col.id}`} className="at-th at-th-custom" style={{ width: 160, minWidth: 120 }}>
                  <div className="at-th-inner"><span className="custom-col-dot">✦</span> {col.name}</div>
                </th>
              ))}
              <th className="at-th at-th-remove" />
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item, idx) => (
              <tr key={`${item.product_id}-${item.source}`}
                className={`at-row ${dragOverIdx === idx ? 'at-row-drag-over' : ''}`}
                draggable
                onDragStart={e => { setDragRowIdx(idx); e.dataTransfer.effectAllowed = 'move'; }}
                onDragOver={e => { e.preventDefault(); setDragOverIdx(idx); }}
                onDrop={e => { e.preventDefault(); handleRowDrop(idx); }}
                onDragEnd={() => { setDragRowIdx(null); setDragOverIdx(null); }}>
                <td className="at-td at-td-drag" title="Drag to reorder">⠿</td>
                <td className="at-td at-td-expand">
                  <button className="expand-btn" onClick={() => setExpandedItem(item)} title="Expand">⤢</button>
                </td>
                {visibleCols.map(col => (
                  <td key={col.key} className="at-td" style={{ width: col.width, maxWidth: col.width }}>
                    {renderCell(item, col)}
                  </td>
                ))}
                {customColumns.map(col => {
                  const cellKey = `${item.product_id}__${item.source}__${col.id}`;
                  return (
                    <td key={`custom-${col.id}`} className="at-td">
                      <EditableCell value={customCells[cellKey] || ''} type={col.col_type}
                        onSave={val => saveCustomCell(item, col.id, val)} />
                    </td>
                  );
                })}
                <td className="at-td at-td-remove">
                  <button className="remove-btn" onClick={() => removeFromList(item)}>✕</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="at-summary-row">
              <td colSpan={2} />
              {visibleCols.map(col => (
                <td key={col.key} className="at-td at-summary-cell">
                  {col.key === 'subtotal' && <strong>{fmt(totalPrice)}</strong>}
                  {col.key === 'quantity' && <strong>{items.reduce((s, i) => s + (i.quantity || 1), 0)}</strong>}
                  {col.key === 'price' && Object.entries(bySource).map(([src, total]) => (
                    <div key={src} style={{ fontSize: 10, color: SOURCE_COLORS[src] }}>{src}: {fmt(total)}</div>
                  ))}
                </td>
              ))}
              <td colSpan={customColumns.length + 1} />
            </tr>
          </tfoot>
        </table>
      </div>

      {expandedItem && <RowPanel item={expandedItem} onClose={() => setExpandedItem(null)} />}
      <Footer />
    </div>
  );
}
