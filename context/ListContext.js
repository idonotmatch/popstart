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
      try {
        const parsedList = JSON.parse(savedList);
        console.log('Parsed list:', parsedList);
        if (parsedList.expiration > Date.now()) {
          console.log('List is not expired, setting list from localStorage');
          setList(parsedList.data);
          setLastRefresh(parsedList.lastRefresh);
        } else {
          console.log('List is expired, removing from localStorage');
          localStorage.removeItem('list');
        }
      } catch (error) {
        console.error('Error parsing saved list:', error);
        localStorage.removeItem('list');
      }
    } else {
      console.log('No saved list found in localStorage');
    }
  }, []);

  useEffect(() => {
    console.log('List or lastRefresh changed, updating localStorage', { list, lastRefresh });
    const listData = {
      data: list,
      expiration: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
      lastRefresh
    };
    try {
      localStorage.setItem('list', JSON.stringify(listData));
      console.log('Updated localStorage with new list data');
    } catch (error) {
      console.error('Error saving list to localStorage:', error);
    }
  }, [list, lastRefresh]);

  const generateUniqueId = (item) => {
    const idParts = [
      item.id,
      item.asin,
      item.source,
      item.title,
      item.brand,
      item.price
    ].filter(Boolean);
    
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
          return { ...item, quantity: Math.max(1, newQuantity) };
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
    console.log('Refreshing list, current items:', list.items);
    if (list.items.length === 0) {
      console.log('List is empty, nothing to refresh');
      return;
    }
  
    const updatedItems = await Promise.all(list.items.map(async (item) => {
      try {
        const source = item.source || (item.link?.includes('amazon.com') ? 'amazon' : 'walmart');
        const url = '/api/refresh-item';
        const identifier = item.asin || item.id;
        console.log(`Refreshing item: ${item.title}, Source: ${source}, Identifier: ${identifier}`);
        const response = await axios.post(url, {
          source,
          identifier,
          country: 'us'
        });
  
        const newData = response.data;
  
        if (newData && newData.price) {
          console.log(`Updated price for ${item.title}: ${newData.price}`);
          return {
            ...item,
            lastVerifiedPrice: newData.price,
            lastUpdated: new Date().toISOString()
          };
        } else {
          console.log(`No new data for ${item.title}, keeping original`);
          return item;
        }
      } catch (error) {
        console.error(`Error refreshing item ${item.title}:`, error.response ? error.response.data : error.message);
        return {
          ...item,
          refreshFailed: true,
          refreshError: error.response ? error.response.data.error : error.message,
          lastUpdated: new Date().toISOString()
        };
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
    try {
      localStorage.setItem('list', JSON.stringify(listData));
      console.log('Updated localStorage after refresh');
    } catch (error) {
      console.error('Error saving refreshed list to localStorage:', error);
    }
  }, [list.items]);

  const clearList = useCallback(() => {
    console.log('Clearing list');
    setList({ items: [] });
    setLastRefresh(null);
    try {
      localStorage.removeItem('list');
      console.log('List cleared and removed from localStorage');
    } catch (error) {
      console.error('Error removing list from localStorage:', error);
    }
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