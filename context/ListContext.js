import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
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
  const initialLoadDone = useRef(false);

  useEffect(() => {
    console.log('ListProvider mounted');
    if (!initialLoadDone.current) {
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
        }
      } else {
        console.log('No saved list found in localStorage');
      }
      initialLoadDone.current = true;
    }
  }, []);

  useEffect(() => {
    if (initialLoadDone.current) {
      console.log('List or lastRefresh changed, updating localStorage', { list, lastRefresh });
      const listData = {
        data: list,
        expiration: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
        lastRefresh
      };
      localStorage.setItem('list', JSON.stringify(listData));
      console.log('Updated localStorage with new list data');
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
      console.log('Previous list state:', prevList);
      const uniqueId = generateUniqueId(newItem);
      const existingItemIndex = prevList.items.findIndex(item => generateUniqueId(item) === uniqueId);

      let updatedList;
      if (existingItemIndex !== -1) {
        console.log('Item already exists, updating quantity');
        const updatedItems = prevList.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        updatedList = { ...prevList, items: updatedItems };
      } else {
        console.log('Adding new item to list');
        updatedList = {
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
      console.log('Updated list state:', updatedList);
      return updatedList;
    });
  }, []);

  const removeFromList = useCallback((uniqueId) => {
    console.log('Removing item from list:', uniqueId);
    setList((prevList) => {
      const updatedList = {
        ...prevList,
        items: prevList.items.filter((item) => item.uniqueId !== uniqueId)
      };
      console.log('Updated list after removal:', updatedList);
      return updatedList;
    });
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
      const updatedList = { ...prevList, items: updatedItems };
      console.log('Updated list after quantity change:', updatedList);
      return updatedList;
    });
  }, []);

  const addNote = useCallback((uniqueId, note) => {
    console.log('Adding note:', uniqueId, note);
    setList((prevList) => {
      const updatedItems = prevList.items.map((item) =>
        item.uniqueId === uniqueId ? { ...item, note } : item
      );
      const updatedList = { ...prevList, items: updatedItems };
      console.log('Updated list after adding note:', updatedList);
      return updatedList;
    });
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
        const url = `https://api.scraperapi.com/structured/${source}/search`;
        const params = {
          api_key: process.env.NEXT_PUBLIC_SCRAPER_API_KEY,
          query: item.title,
          country: 'us'
        };

        console.log(`Fetching data for item: ${item.title}`);
        const response = await axios.get(url, { params });
        const newData = response.data.results[0];

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
        console.error(`Error refreshing item ${item.title}:`, error);
        return item; // Return the original item if there's an error
      }
    }));

    console.log('Updated items after refresh:', updatedItems);
    if (updatedItems.length > 0) {
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
    } else {
      console.log('No items were updated during refresh');
    }
  }, [list.items]);

  const clearList = useCallback(() => {
    console.log('Clearing list');
    setList({ items: [] });
    localStorage.removeItem('list');
    console.log('List cleared and removed from localStorage');
  }, []);

  console.log('Rendering ListProvider, current list:', list);

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