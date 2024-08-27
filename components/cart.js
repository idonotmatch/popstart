import React, { useState, useEffect } from 'react';

const Cart = ({ items, onClose, onUpdateQuantity, onRemoveItem, onUpdatePrice, onAddNote }) => {
  const [sortedItems, setSortedItems] = useState(items);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSortedItems(items);
  }, [items]);

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace('$', '').trim());
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    setSortedItems(items.slice().sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    }));
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems(prevSelected => 
      prevSelected.includes(itemId)
        ? prevSelected.filter(id => id !== itemId)
        : [...prevSelected, itemId]
    );
  };

  const handleBulkRemove = () => {
    selectedItems.forEach(itemId => onRemoveItem(itemId));
    setSelectedItems([]);
  };

  const totalPrice = sortedItems.reduce((sum, item) => {
    const price = parsePrice(item.price);
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close-cart" onClick={onClose}>&times;</button>
        <h2>Your Cart</h2>
        {sortedItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th><input type="checkbox" onChange={() => {}} /></th>
                  <th>Item</th>
                  <th onClick={() => requestSort('price')}>Price</th>
                  <th onClick={() => requestSort('quantity')}>Quantity</th>
                  <th>Subtotal</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.map((item) => {
                  const subtotal = parsePrice(item.price) * item.quantity;
                  return (
                    <tr key={item.id}>
                      <td>
                        <input 
                          type="checkbox" 
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleSelectItem(item.id)}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>
                        <input 
                          type="text" 
                          value={item.price} 
                          onChange={(e) => onUpdatePrice(item.id, e.target.value)}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                          min="1"
                        />
                      </td>
                      <td>${subtotal.toFixed(2)}</td>
                      <td>
                        <input 
                          type="text" 
                          value={item.note || ''} 
                          onChange={(e) => onAddNote(item.id, e.target.value)}
                          placeholder="Add note..."
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="cart-actions">
              <button onClick={handleBulkRemove} disabled={selectedItems.length === 0}>
                Remove Selected
              </button>
            </div>
            <div className="cart-total">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;