// components/AddToCartButton.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const AddToCartButton = ({ item, addToast }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsAdded(true);
    addToast(`${item.title} added to cart`);
    setTimeout(() => setIsAdded(false), 3000); // Reset after 2 seconds
  };

  return (
    <button 
      onClick={handleAddToCart} 
      className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
      disabled={isAdded}
    >
      {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;