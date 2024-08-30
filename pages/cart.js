import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, addNote, refreshCart, lastRefresh } = useCart();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const initialRefreshDone = useRef(false);

  useEffect(() => {
    if (!initialRefreshDone.current) {
      refreshCart();
      initialRefreshDone.current = true;
    }
  }, [refreshCart]);

  const ImageWithFallback = ({ src, alt, width, height }) => {
    try {
      return <Image src={src} alt={alt} width={width} height={height} />
    } catch (error) {
      return <img src={src} alt={alt} style={{ width, height, objectFit: 'contain' }} />
    }
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const calculateSubtotal = useCallback((price, verifiedPrice, quantity) => {
    const numericPrice = parseFloat((verifiedPrice || price).replace(/[^0-9.-]+/g,""));
    return (numericPrice * quantity).toFixed(2);
  }, []);

  const handleQuantityChange = useCallback((uniqueId, newQuantity) => {
    console.log("Quantity change:", uniqueId, newQuantity);
    updateQuantity(uniqueId, parseInt(newQuantity));
  }, [updateQuantity]);

  const sortItems = useCallback((items, sortConfig) => {
    const sortableItems = [...items];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
  
        // Special handling for price
        if (sortConfig.key === 'price') {
          aValue = parseFloat(aValue.replace(/[^0-9.-]+/g,""));
          bValue = parseFloat(bValue.replace(/[^0-9.-]+/g,""));
        }
  
        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, []);

  const requestSort = useCallback((key) => {
    setSortConfig(prevConfig => {
      if (prevConfig.key === key) {
        return { key, direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending' };
      }
      return { key, direction: 'ascending' };
    });
  }, []);

  const getSortIndicator = useCallback((columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
    }
    return '';
  }, [sortConfig]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshCart();
    setIsRefreshing(false);
  };

  const sortedItems = useMemo(() => sortItems(cart.items, sortConfig), [cart.items, sortConfig, sortItems]);

  const totalItems = useMemo(() => cart.items.reduce((sum, item) => sum + item.quantity, 0), [cart.items]);
  const totalPrice = useMemo(() => 
    cart.items.reduce((sum, item) => sum + parseFloat(calculateSubtotal(item.price, item.lastVerifiedPrice, item.quantity)), 0).toFixed(2),
    [cart.items, calculateSubtotal]
  );

  return (
    <div className="page-container">
      <Header />
      <main className="cart-page">
        <h1>Your Cart</h1>
        <button onClick={handleRefresh} disabled={isRefreshing}>
          {isRefreshing ? 'Refreshing...' : 'Refresh Cart'}
        </button>
        {lastRefresh && <p>Last refreshed: {new Date(lastRefresh).toLocaleString()}</p>}
        {cart.items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-table-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th onClick={() => requestSort('title')}>Item{getSortIndicator('title')}</th>
                  <th onClick={() => requestSort('price')}>Original Price{getSortIndicator('price')}</th>
                  <th>Last Verified Price</th>
                  <th onClick={() => requestSort('quantity')}>Quantity{getSortIndicator('quantity')}</th>
                  <th>Subtotal</th>
                  <th onClick={() => requestSort('rating')}>Avg. Rating{getSortIndicator('rating')}</th>
                  <th onClick={() => requestSort('ratingsTotal')}>Review Count{getSortIndicator('ratingsTotal')}</th>
                  <th onClick={() => requestSort('brand')}>Brand{getSortIndicator('brand')}</th>
                  <th onClick={() => requestSort('source')}>Source{getSortIndicator('source')}</th>
                  <th>Retailer ID</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.map((item) => (
                  <tr key={item.uniqueId}>
                    <td>
                      <ImageWithFallback src={item.image} alt={item.title} width={50} height={50} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      {item.lastVerifiedPrice || 'Not verified'}
                      {item.lastVerifiedDate && (
                        <div className="verified-date">
                          Verified: {new Date(item.lastVerifiedDate).toLocaleString()}
                        </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.uniqueId, e.target.value)}
                        min="1"
                      />
                      <br />
                      <a 
                        href="#" 
                        className="remove-link" 
                        onClick={(e) => {
                          e.preventDefault();
                          removeFromCart(item.uniqueId);
                        }}
                      >
                        Remove
                      </a>
                    </td>
                    <td>${calculateSubtotal(item.price, item.lastVerifiedPrice, item.quantity)}</td>
                    <td>{item.rating || 'N/A'}</td>
                    <td>{item.ratingsTotal ? formatNumber(item.ratingsTotal) : 'N/A'}</td>
                    <td>{item.brand || 'N/A'}</td>
                    <td>{item.source || (item.link?.includes('amazon.com') ? 'Amazon' : 'Walmart')}</td>
                    <td>{item.asin || item.id || 'N/A'}</td>
                    <td>
                      <input
                        type="text"
                        value={item.note || ''}
                        onChange={(e) => addNote(item.uniqueId, e.target.value)}
                        placeholder="Add note..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="cart-summary">
          <h2>Cart Summary</h2>
          <p>Total Items: {formatNumber(totalItems)}</p>
          <p>Total Price: ${formatNumber(parseFloat(totalPrice))}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;