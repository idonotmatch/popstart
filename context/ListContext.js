import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ListContext = createContext();

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useList must be used within a ListProvider');
  }
  return context;
};

export const ListProvider = ({ children }) => {
  const [list, setList] = useState({ items: [] });
  const [lastRefresh, setLastRefresh] = useState(null);

  // Load list from localStorage on initial render
  useEffect(() => {
    const savedList = localStorage.getItem('list');
    if (savedList) {
      const parsedList = JSON.parse(savedList);
      if (parsedList.expiration > Date.now()) {
        setList(parsedList.data);
        setLastRefresh(parsedList.lastRefresh);
      } else {
        localStorage.removeItem('list');
      }
    }
  }, []);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    const listData = {
      data: list,
      expiration: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
      lastRefresh
    };
    localStorage.setItem('list', JSON.stringify(listData));
  }, [list, lastRefresh]);

  const generateUniqueId = (item) => {
    return `${item.id || ''}-${item.title?.replace(/\s+/g, '-').slice(0, 20) || ''}-${Date.now()}`;
  };

  const addToList = useCallback((newItem) => {
    setList((prevList) => {
      const uniqueId = generateUniqueId(newItem);
      const existingItemIndex = prevList.items.findIndex(item => item.uniqueId === uniqueId);

      if (existingItemIndex !== -1) {
        const updatedItems = prevList.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
        return { ...prevList, items: updatedItems };
      } else {
        return {
          ...prevList,
          items: [...prevList.items, { 
            ...newItem, 
            uniqueId, 
            quantity: 1, 
            lastVerifiedPrice: newItem.price,
            lastVerifiedDate: new Date().toISOString()
          }]
        };
      }
    });
  }, []);

  const removeFromList = useCallback((uniqueId) => {
    setList((prevList) => ({
      ...prevList,
      items: prevList.items.filter((item) => item.uniqueId !== uniqueId)
    }));
  }, []);

  const updateQuantity = useCallback((uniqueId, newQuantity) => {
    setList((prevList) => {
      const updatedItems = prevList.items.map((item) => {
        if (item.uniqueId === uniqueId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return { ...prevList, items: updatedItems };
    });
  }, []);

  const addNote = useCallback((uniqueId, note) => {
    setList((prevList) => ({
      ...prevList,
      items: prevList.items.map((item) =>
        item.uniqueId === uniqueId ? { ...item, note } : item
      )
    }));
  }, []);

  const clearList = useCallback(() => {
    setList({ items: [] });
    localStorage.removeItem('list');
  }, []);

  const refreshListItem = async (item) => {
    // This is where you'd fetch the latest data for the item
    // For now, we'll simulate an API call that returns the same price
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate updated data
        const updatedItem = {
          ...item,
          lastVerifiedPrice: item.price,
          lastVerifiedDate: new Date().toISOString()
        };
        resolve(updatedItem);
      }, 500); // Simulate network delay
    });
  };

  const refreshList = useCallback(async () => {
    const updatedItems = await Promise.all(list.items.map(refreshListItem));
    setList(prevList => ({ ...prevList, items: updatedItems }));
    setLastRefresh(new Date().toISOString());
  }, [list.items]);

  return (
    <ListContext.Provider value={{ 
      list, 
      addToList, 
      removeFromList, 
      updateQuantity, 
      addNote, 
      clearList,
      refreshList,
      lastRefresh 
    }}>
      {children}
    </ListContext.Provider>
  );
};