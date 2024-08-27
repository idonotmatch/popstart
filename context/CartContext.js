import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });
  const [lastRefresh, setLastRefresh] = useState(null);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      if (parsedCart.expiration > Date.now()) {
        setCart(parsedCart.data);
        setLastRefresh(parsedCart.lastRefresh);
      } else {
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    const cartData = {
      data: cart,
      expiration: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
      lastRefresh
    };
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [cart, lastRefresh]);

  const generateUniqueId = (item) => {
    return `${item.id || ''}-${item.title?.replace(/\s+/g, '-').slice(0, 20) || ''}-${Date.now()}`;
  };

  const addToCart = useCallback((newItem) => {
    setCart((prevCart) => {
      const uniqueId = generateUniqueId(newItem);
      const existingItemIndex = prevCart.items.findIndex(item => item.uniqueId === uniqueId);
      
      if (existingItemIndex !== -1) {
        const updatedItems = prevCart.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
        return { ...prevCart, items: updatedItems };
      } else {
        return {
          ...prevCart,
          items: [...prevCart.items, { 
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

  const removeFromCart = useCallback((uniqueId) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter((item) => item.uniqueId !== uniqueId)
    }));
  }, []);

  const updateQuantity = useCallback((uniqueId, newQuantity) => {
    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) => {
        if (item.uniqueId === uniqueId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return { ...prevCart, items: updatedItems };
    });
  }, []);

  const addNote = useCallback((uniqueId, note) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.uniqueId === uniqueId ? { ...item, note } : item
      )
    }));
  }, []);

  const clearCart = useCallback(() => {
    setCart({ items: [] });
    localStorage.removeItem('cart');
  }, []);

  const refreshCartItem = async (item) => {
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

  const refreshCart = useCallback(async () => {
    const updatedItems = await Promise.all(cart.items.map(refreshCartItem));
    setCart(prevCart => ({ ...prevCart, items: updatedItems }));
    setLastRefresh(new Date().toISOString());
  }, [cart.items]);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      addNote, 
      clearCart,
      refreshCart,
      lastRefresh 
    }}>
      {children}
    </CartContext.Provider>
  );
};