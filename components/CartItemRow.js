import React from 'react';

const CartItemRow = ({ item, onUpdateQuantity, onRemoveItem, onSelect, isSelected }) => {
  return (
    <div className={`cart-item-row ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <div className="cart-item-quantity">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <button onClick={() => onRemoveItem(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItemRow;