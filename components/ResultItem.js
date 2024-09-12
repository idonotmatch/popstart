import React, { useState } from 'react';
import { useList } from '../context/ListContext';

// Utility functions
const formatPrice = (price) => {
  if (price == null || price === '') return 'Not Found';
  
  let numPrice;
  if (typeof price === 'string') {
    numPrice = parseFloat(price.replace(/[^0-9.-]+/g,""));
  } else if (typeof price === 'number') {
    numPrice = price;
  } else {
    return 'Not Found';
  }

  return isNaN(numPrice) ? 'Not Found' : `$${numPrice.toFixed(2)}`;
};

const formatRating = (rating, ratingsTotal) => {
  const formattedRating = rating !== '0.0' ? rating : 'Not Found';
  const formattedReviews = ratingsTotal 
    ? `${ratingsTotal.toLocaleString()} ${ratingsTotal === 1 ? 'review' : 'reviews'}`
    : 'No reviews';
  return `${formattedRating} (${formattedReviews})`;
};

const ResultItem = React.memo(({ item }) => {
  const { addToList } = useList();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToList = (e) => {
    e.preventDefault();
    addToList(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000); // Reset after 2 seconds
  };

  return (
    <div className="result-item">
      <div className="image"><img src={item.image} alt={item.title} /></div>
      <div className="details">
        <div className="title">
          <p title={item.title} className={`${item.title?.length > 80 ? 'tooltip' : ''}`}>
            {item.title?.slice(0, 80)}{item.title?.length > 80 ? '...' : ''}
          </p>
        </div>
        <div className="rating">
          <p>Rating: {formatRating(item.rating, item.ratingsTotal)}</p>
        </div>
        <div className="price"><p>Price: {formatPrice(item.price)}</p></div>
        <a href={item.link} target="_blank" rel="noreferrer" className="product-details-link">
          Product Details
        </a>
        <div className="actions">
          <button 
            onClick={handleAddToList} 
            className={`add-to-list-btn ${isAdded ? 'added' : ''}`}
            disabled={isAdded}
          >
            {isAdded ? 'Added to List ✓' : 'Add to List'}
          </button>
        </div>
      </div>
    </div>
  );
});

export default ResultItem;