import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const ListContext = createContext();

export const useList = () => useContext(ListContext);

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
        // Load list from localStorage for non-logged-in users
        const storedList = localStorage.getItem('guestList');
        if (storedList) {
          setList(JSON.parse(storedList));
        }
      }
    }
  }, [user, isLoading]);

  const fetchList = async () => {
    if (!user) return;
    try {
      const response = await fetch('/api/list');
      if (!response.ok) {
        throw new Error('Failed to fetch list');
      }
      const data = await response.json();
      console.log('Fetched list data:', data);
      setList({ items: Array.isArray(data) ? data : [] });
      setLastRefresh(new Date().toISOString());
    } catch (error) {
      console.error('Error fetching list:', error);
      setList({ items: [] });
    }
  };

  const mergeGuestListWithUserList = async () => {
    const guestList = JSON.parse(localStorage.getItem('guestList') || '{"items": []}');
    
    if (guestList.items.length > 0) {
      console.log('Merging guest list with user list');
      
      // First, fetch the user's existing list
      await fetchList();
      
      // Then, add each item from the guest list to the user's list
      for (let item of guestList.items) {
        await addToList(item, true); // true flag to indicate it's a merge operation
      }
      
      // Clear the guest list from localStorage
      localStorage.removeItem('guestList');
    } else {
      // If there's no guest list, just fetch the user's list
      await fetchList();
    }
  };

  const addToList = async (item, isMergeOperation = false) => {
    console.log('Adding item to list:', item);
    if (user) {
      try {
        const response = await fetch('/api/list', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Successfully added item:', data);
          // Always fetch the list after adding an item, even during merge operations
          await fetchList();
        } else {
          const errorData = await response.json();
          console.error('Error adding item to list:', errorData);
        }
      } catch (error) {
        console.error('Error adding item to list:', error);
      }
    } else {
      // For non-logged-in users, store in localStorage
      const newList = { items: [...list.items, { ...item, id: Date.now() }] };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const removeFromList = async (productId) => {
    if (user) {
      try {
        const response = await fetch(`/api/list/${productId}`, { method: 'DELETE' });
        if (response.ok) {
          await fetchList();
        } else {
          throw new Error('Failed to remove item from list');
        }
      } catch (error) {
        console.error('Error removing item from list:', error);
      }
    } else {
      // For non-logged-in users, update localStorage
      const newList = { items: list.items.filter(item => item.id !== productId) };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (user) {
      try {
        const response = await fetch(`/api/list/${productId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: newQuantity }),
        });
        if (response.ok) {
          await fetchList();
        } else {
          throw new Error('Failed to update quantity');
        }
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    } else {
      // For non-logged-in users, update localStorage
      const newList = {
        items: list.items.map(item => 
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const addNote = async (productId, note) => {
    if (user) {
      try {
        const response = await fetch(`/api/list/${productId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ notes: note }),
        });
        if (response.ok) {
          await fetchList();
        } else {
          throw new Error('Failed to add note');
        }
      } catch (error) {
        console.error('Error adding note:', error);
      }
    } else {
      // For non-logged-in users, update localStorage
      const newList = {
        items: list.items.map(item => 
          item.id === productId ? { ...item, notes: note } : item
        )
      };
      setList(newList);
      localStorage.setItem('guestList', JSON.stringify(newList));
    }
  };

  const refreshList = async () => {
    if (!user) return; // Don't refresh for non-logged-in users
    setIsRefreshing(true);
    try {
      console.log('Initiating list refresh');
      const response = await fetch('/api/list', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to refresh list');
      const refreshedItems = await response.json();
      console.log('Refreshed items:', refreshedItems);
      
      // Update the list with the new data
      setList({ 
        items: refreshedItems.map(item => item.new)
      });

      // Compare old and new data
      refreshedItems.forEach(item => {
        const changedFields = ['name', 'price', 'image_url', 'availability'].filter(
          key => item.old[key] !== item.new[key]
        );

        if (changedFields.length === 0) {
          console.log(`Item unchanged: ${item.old.product_id}`);
        } else {
          console.log(`Item updated: ${item.old.product_id}`);
          console.log('Changes:');
          changedFields.forEach(key => {
            console.log(`  ${key}: ${item.old[key]} => ${item.new[key]}`);
          });
        }
      });

      setLastRefresh(new Date().toISOString());
      console.log('List refresh completed');
    } catch (error) {
      console.error('Error refreshing list:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const clearList = async () => {
    if (user) {
      try {
        const response = await fetch('/api/list', { method: 'DELETE' });
        if (response.ok) {
          setList({ items: [] });
          setLastRefresh(new Date().toISOString());
        } else {
          throw new Error('Failed to clear list');
        }
      } catch (error) {
        console.error('Error clearing list:', error);
      }
    } else {
      // For non-logged-in users, clear localStorage
      setList({ items: [] });
      localStorage.removeItem('guestList');
    }
  };

  return (
    <ListContext.Provider value={{ 
      list, 
      addToList, 
      removeFromList, 
      updateQuantity, 
      addNote, 
      refreshList, 
      lastRefresh, 
      clearList,
      isRefreshing 
    }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;