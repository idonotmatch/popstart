import React, { useState } from 'react';
import { useList } from '../context/ListContext';
import SentimentBadge from './SentimentBadge';

const formatPrice = (price) => {
  if (price == null || price === '') return null;
  let numPrice;
  if (typeof price === 'string') {
    numPrice = parseFloat(price.replace(/[^0-9.-]+/g, ''));
  } else if (typeof price === 'number') {
    numPrice = price;
  } else {
    return null;
  }
  return isNaN(numPrice) ? null : `$${numPrice.toFixed(2)}`;
};

const formatRating = (rating, ratingsTotal) => {
  if (!rating || rating === '0.0') return null;
  const stars = '★'.repeat(Math.round(parseFloat(rating))) + '☆'.repeat(5 - Math.round(parseFloat(rating)));
  const reviews = ratingsTotal ? `(${Number(ratingsTotal).toLocaleString()})` : '';
  return { stars, rating: parseFloat(rating).toFixed(1), reviews };
};

const SOURCE_LABELS = {
  amazon: { label: 'Amazon', color: '#FF9900', textColor: '#111' },
  walmart: { label: 'Walmart', color: '#0071CE', textColor: '#fff' },
};

const ResultItem = React.memo(({ item, onAddToCart, sentiment, sentimentBrand }) => {
  const { list, addToList } = useList();
  const [isAdding, setIsAdding] = useState(false);

  const isInList = list.items.some(
    i => i.product_id === item.product_id && i.source === item.source
  );

  const handleAddToList = async (e) => {
    e.preventDefault();
    if (isInList) return;
    setIsAdding(true);
    try {
      if (onAddToCart) {
        onAddToCart(item);
      } else {
        await addToList(item);
      }
    } finally {
      setIsAdding(false);
    }
  };

  const formattedPrice = formatPrice(item.price);
  const formattedRating = formatRating(item.rating, item.ratingsTotal);
  const source = item.source || 'amazon';
  const sourceInfo = SOURCE_LABELS[source] || SOURCE_LABELS.amazon;

  return (
    <div className="result-item">
      <div className="image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="details">
        <div className="result-meta">
          <span className="source-badge" style={{ backgroundColor: sourceInfo.color, color: sourceInfo.textColor }}>
            {sourceInfo.label}
          </span>
        </div>
        <div className="title">
          <p title={item.title}>
            {item.title?.slice(0, 80)}{item.title?.length > 80 ? '...' : ''}
          </p>
        </div>
        {formattedPrice ? (
          <div className="price-prominent">{formattedPrice}</div>
        ) : (
          <div className="price-unavailable">Price unavailable</div>
        )}
        {formattedRating && (
          <div className="rating">
            <span className="stars" title={`${formattedRating.rating} out of 5`}>{formattedRating.stars}</span>
            <span className="review-count">{formattedRating.rating} {formattedRating.reviews}</span>
          </div>
        )}
        {sentiment && (
          <div className="sentiment-row">
            <SentimentBadge sentiment={sentiment} brandName={sentimentBrand || item.brand} />
          </div>
        )}
        <div className="actions">
          <a href={item.link} target="_blank" rel="noreferrer" className="product-details-link">
            View product ↗
          </a>
          <button
            onClick={handleAddToList}
            className={`add-to-list-btn ${(isInList || isAdding) ? 'added' : ''}`}
            disabled={isInList || isAdding}
          >
            {isInList ? '✓ In List' : isAdding ? 'Adding…' : '+ Add to List'}
          </button>
        </div>
      </div>
    </div>
  );
});

export default ResultItem;
