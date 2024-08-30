import React, { useState } from 'react';
import { useList } from '../context/ListContext';

const ResultItem = React.memo(({ item }) => {
  const { addToList } = useList();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToList = (e) => {
    e.preventDefault();
    addToList(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
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
          <p>Rating: {item.rating !== '0.0' ? item.rating : 'Not Found'} 
             ({item.ratingsTotal ? `${item.ratingsTotal.toLocaleString()} ${item.ratingsTotal === 1 ? 'review' : 'reviews'}` : 'No reviews'})
          </p>
        </div>
        <div className="price"><p>Price: {item.price || 'Not Found'}</p></div>
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