import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ResultItem = React.memo(({ item, isCompact, addToast }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(item);
    setIsAdded(true);
    addToast(`${item.title.slice(0, 30)}${item.title.length > 30 ? '...' : ''} added to cart`);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
  };

  if (isCompact) {
    return (
      <div className="result-item compact">
        <div className="image"><img src={item.image} alt={item.title} /></div>
        <div className="details">
          <div className="title" title={item.title}>
            {item.title?.slice(0, 40)}{item.title?.length > 40 ? '...' : ''}
          </div>
          <div className="price-rating">
            <span className="price">{item.price || 'N/A'}</span>
            <span className="rating">{item.rating !== '0.0' ? `★${item.rating}` : 'No rating'}</span>
          </div>
          <a href={item.link} target="_blank" rel="noreferrer" className="product-details-link">
            Product Details
          </a>
          <div className="actions">
            <button 
              onClick={handleAddToCart} 
              className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
              disabled={isAdded}
            >
              {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="result-item">
      <div className="image"><img src={item.image} alt={item.title} /></div>
      <div className="details">
        <div className="title">
          <p
            title={item.title}
            className={`${item.title?.length > 80 ? 'tooltip' : ''}`}
          >{item.title?.slice(0, 80)}{item.title?.length > 80 ? '...' : ''}</p>
        </div>
        {/* <div className="brand"><p>Brand: {item.brand ? item.brand.slice(0, 40) : 'Not Found'}{item.brand && item.brand.length > 40 ? '...' : ''}</p></div> */}
        <div className="rating"><p>Rating: {item.rating !== '0.0' ? item.rating : 'Not Found'} ({item.ratingsTotal ? `${item.ratingsTotal.toLocaleString()} ${item.ratingsTotal === 1 ? 'review' : 'reviews'}` : 'No reviews'})</p></div>
        <div className="price"><p>Price: {item.price || 'Not Found'}</p></div>
        <a href={item.link} target="_blank" rel="noreferrer" className="product-details-link">
          Product Details
        </a>
        <div className="actions">
          <button 
            onClick={handleAddToCart} 
            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
            disabled={isAdded}
          >
            {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
});

export default ResultItem;