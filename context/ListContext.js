import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    const savedList = localStorage.getItem('list');
    console.log('Initial load - Saved list from localStorage:', savedList);
    if (savedList) {
      const parsedList = JSON.parse(savedList);
      console.log('Parsed list:', parsedList);
      if (parsedList.expiration > Date.now()) {
        console.log('Setting list from localStorage');
        setList(parsedList.data);
        setLastRefresh(parsedList.lastRefresh);
      } else {
        console.log('List expired, removing from localStorage');
        localStorage.removeItem('list');
      }
    }
  }, []);

  useEffect(() => {
    console.log('List changed, updating localStorage', list);
    const listData = {
      data: list,
      expiration: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
      lastRefresh
    };
    localStorage.setItem('list', JSON.stringify(listData));
  }, [list, lastRefresh]);

  const generateUniqueId = (item) => {
    // Create a unique identifier using multiple attributes
    const idParts = [
      item.id,
      item.asin,
      item.source,
      item.title,
      item.brand,
      item.price
    ].filter(Boolean); // Remove any undefined or null values
    
    return idParts.join('-').replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
  };

  const addToList = useCallback((newItem) => {
    console.log('Adding item to list:', newItem);
    setList((prevList) => {
      const uniqueId = generateUniqueId(newItem);
      const existingItemIndex = prevList.items.findIndex(item => generateUniqueId(item) === uniqueId);

      if (existingItemIndex !== -1) {
        console.log('Item already exists, updating quantity');
        const updatedItems = prevList.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        return { ...prevList, items: updatedItems };
      } else {
        console.log('Adding new item to list');
        return {
          ...prevList,
          items: [...prevList.items, { 
            ...newItem, 
            uniqueId,
            quantity: 1, 
            originalPrice: newItem.price,
            lastVerifiedPrice: newItem.price,
            lastUpdated: new Date().toISOString()
          }]
        };
      }
    });
  }, []);

  const removeFromList = useCallback((uniqueId) => {
    console.log('Removing item from list:', uniqueId);
    setList((prevList) => ({
      ...prevList,
      items: prevList.items.filter((item) => item.uniqueId !== uniqueId)
    }));
  }, []);

  const updateQuantity = useCallback((uniqueId, newQuantity) => {
    console.log('Updating quantity:', uniqueId, newQuantity);
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
    console.log('Adding note:', uniqueId, note);
    setList((prevList) => ({
      ...prevList,
      items: prevList.items.map((item) =>
        item.uniqueId === uniqueId ? { ...item, note } : item
      )
    }));
  }, []);

  const refreshList = useCallback(async () => {
    console.log('Refreshing list', list.items);
    const updatedItems = await Promise.all(list.items.map(async (item) => {
      try {
        const source = item.source || (item.link?.includes('amazon.com') ? 'amazon' : 'walmart');
        const url = `https://api.scraperapi.com/structured/${source}/search`;
        const params = {
          api_key: process.env.NEXT_PUBLIC_SCRAPER_API_KEY,
          query: item.title,
          country: 'us'
        };

        const response = await axios.get(url, { params });
        const newData = response.data.results[0];

        return {
          ...item,
          lastVerifiedPrice: newData?.price || item.lastVerifiedPrice || item.price,
          lastUpdated: new Date().toISOString()
        };
      } catch (error) {
        console.error('Error refreshing item:', error);
        return item; // Return the original item if there's an error
      }
    }));

    console.log('Updated items after refresh:', updatedItems);
    setList(prevList => {
      const newList = { ...prevList, items: updatedItems };
      console.log('New list after refresh:', newList);
      return newList;
    });
    setLastRefresh(new Date().toISOString());

    // Update localStorage
    const listData = {
      data: { items: updatedItems },
      expiration: Date.now() + 30 * 24 * 60 * 60 * 1000,
      lastRefresh: new Date().toISOString()
    };
    localStorage.setItem('list', JSON.stringify(listData));
    console.log('Updated localStorage after refresh');
  }, [list.items]);

  const clearList = useCallback(() => {
    console.log('Clearing list');
    setList({ items: [] });
    localStorage.removeItem('list');
  }, []);

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