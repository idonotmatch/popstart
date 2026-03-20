import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const ListContext = createContext();
export const useList = () => useContext(ListContext);

// Accepts either a full item object or a raw product_id string
const getId = (itemOrId) =>
  typeof itemOrId === 'object' ? itemOrId.product_id : itemOrId;

export const ListProvider = ({ children }) => {
  const { user, isLoading } = useUser();
  const [list, setList] = useState({ items: [] });
  const [lastRefresh, setLastRefresh] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        mergeGuestListWithUserList();
      } else {
        const stored = localStorage.getItem('guestList');
        if (stored) setList(JSON.parse(stored));
      }
    }
  }, [user, isLoading]);

  const fetchList = async () => {
    if (!user) return;
    try {
      const res = await fetch('/api/list');
      if (!res.ok) throw new Error('Failed to fetch list');
      const data = await res.json();
      setList({ items: Array.isArray(data) ? data : [] });
      setLastRefresh(new Date().toISOString());
    } catch (e) {
      console.error('Error fetching list:', e);
      setList({ items: [] });
    }
  };

  const mergeGuestListWithUserList = async () => {
    const guestList = JSON.parse(localStorage.getItem('guestList') || '{"items":[]}');
    if (guestList.items.length > 0) {
      await fetchList();
      let allSaved = true;
      for (const item of guestList.items) {
        try {
          const res = await fetch('/api/list', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
          });
          if (!res.ok) allSaved = false;
        } catch {
          allSaved = false;
        }
      }
      if (allSaved) localStorage.removeItem('guestList');
      await fetchList();
    } else {
      await fetchList();
    }
  };

  const addToList = async (item) => {
    if (user) {
      try {
        const res = await fetch('/api/list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (res.ok) await fetchList();
        else console.error('Error adding item:', await res.json());
      } catch (e) {
        console.error('Error adding item to list:', e);
      }
    } else {
      const newList = { items: [...list.items, { ...item, id: Date.now() }] };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const removeFromList = async (itemOrId) => {
    const productId = getId(itemOrId);
    if (user) {
      try {
        const res = await fetch(`/api/list/${productId}`, { method: 'DELETE' });
        if (res.ok) await fetchList();
      } catch (e) {
        console.error('Error removing item:', e);
      }
    } else {
      const newList = { items: list.items.filter(i => i.id !== productId && i.product_id !== productId) };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const updateQuantity = async (itemOrId, newQuantity) => {
    const productId = getId(itemOrId);
    if (user) {
      try {
        const res = await fetch(`/api/list/${productId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: newQuantity }),
        });
        if (res.ok) await fetchList();
      } catch (e) {
        console.error('Error updating quantity:', e);
      }
    } else {
      const newList = {
        items: list.items.map(i =>
          (i.id === productId || i.product_id === productId) ? { ...i, quantity: newQuantity } : i
        ),
      };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const addNote = async (itemOrId, note) => {
    const productId = getId(itemOrId);
    if (user) {
      try {
        const res = await fetch(`/api/list/${productId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ notes: note }),
        });
        if (res.ok) await fetchList();
      } catch (e) {
        console.error('Error adding note:', e);
      }
    } else {
      const newList = {
        items: list.items.map(i =>
          (i.id === productId || i.product_id === productId) ? { ...i, notes: note } : i
        ),
      };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const refreshList = async () => {
    if (!user) return;
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/list', { method: 'PUT', headers: { 'Content-Type': 'application/json' } });
      if (!res.ok) throw new Error('Failed to refresh list');
      const refreshed = await res.json();
      setList({ items: refreshed.map(i => i.new) });
      setLastRefresh(new Date().toISOString());
    } catch (e) {
      console.error('Error refreshing list:', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  const clearList = async () => {
    if (user) {
      try {
        const res = await fetch('/api/list', { method: 'DELETE' });
        if (res.ok) { setList({ items: [] }); setLastRefresh(new Date().toISOString()); }
      } catch (e) {
        console.error('Error clearing list:', e);
      }
    } else {
      setList({ items: [] });
      localStorage.removeItem('guestList');
    }
  };

  return (
    <ListContext.Provider value={{ list, addToList, removeFromList, updateQuantity, addNote, refreshList, lastRefresh, clearList, isRefreshing }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
