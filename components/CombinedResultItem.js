import React, { useState } from 'react';
import { useList } from '../context/ListContext';
import SentimentBadge from './SentimentBadge';

const SOURCE_CONFIG = {
  amazon: { label: 'Amazon', color: '#FF9900', textColor: '#111' },
  walmart: { label: 'Walmart', color: '#0071CE', textColor: '#fff' },
};

const formatPrice = (price) => {
  if (price == null || price === '') return null;
  const n = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.-]+/g, '')) : price;
  return isNaN(n) ? null : n;
};

const formatRating = (rating, ratingsTotal) => {
  if (!rating || rating === '0.0') return null;
  const stars = '★'.repeat(Math.round(parseFloat(rating))) + '☆'.repeat(5 - Math.round(parseFloat(rating)));
  const reviews = ratingsTotal ? `(${Number(ratingsTotal).toLocaleString()})` : '';
  return { stars, rating: parseFloat(rating).toFixed(1), reviews };
};

/**
 * Combined card shown when the same product is found on multiple retailers.
 * `primary` is the main product object (Amazon preferred).
 * `secondary` is the matching product from the other retailer.
 */
const CombinedResultItem = React.memo(({ primary, secondary, sentiment, sentimentBrand }) => {
  const { list, addToList } = useList();
  const [addingSrc, setAddingSrc] = useState(null);

  const primaryPrice = formatPrice(primary.price);
  const secondaryPrice = formatPrice(secondary.price);
  const primarySrc = primary._src;
  const secondarySrc = secondary._src;

  const primaryConfig = SOURCE_CONFIG[primarySrc];
  const secondaryConfig = SOURCE_CONFIG[secondarySrc];

  const savings = primaryPrice && secondaryPrice
    ? parseFloat((primaryPrice - secondaryPrice).toFixed(2))
    : null;

  const cheaperSrc = savings > 0 ? secondarySrc : savings < 0 ? primarySrc : null;
  const savingsAmt = savings ? Math.abs(savings).toFixed(2) : null;

  const formattedRating = formatRating(primary.rating, primary.review_count);

  const primaryInList = list.items.some(i => i.product_id === primary.product_id && i.source === primarySrc);
  const secondaryInList = list.items.some(i => i.product_id === secondary.product_id && i.source === secondarySrc);

  const handleAdd = async (item, src) => {
    setAddingSrc(src);
    try {
      await addToList({
        product_id: item.product_id,
        name: item.name,
        price: formatPrice(item.price),
        quantity: 1,
        image_url: item.image_url,
        source: src,
        brand: item.brand,
        product_url: item.product_url,
        rating: item.rating,
        review_count: item.review_count,
      });
    } finally {
      setAddingSrc(null);
    }
  };

  return (
    <div className="result-item combined-result-item">
      <div className="image">
        <img src={primary.image_url} alt={primary.name} />
        <div className="combined-badge">2 retailers</div>
      </div>
      <div className="details">
        {/* Retailer source dots */}
        <div className="result-meta">
          <span className="source-badge" style={{ backgroundColor: primaryConfig.color, color: primaryConfig.textColor }}>
            {primaryConfig.label}
          </span>
          <span className="source-badge" style={{ backgroundColor: secondaryConfig.color, color: secondaryConfig.textColor }}>
            {secondaryConfig.label}
          </span>
          {cheaperSrc && savingsAmt && parseFloat(savingsAmt) >= 0.50 && (
            <span className="savings-badge">
              Save ${savingsAmt} at {SOURCE_CONFIG[cheaperSrc].label}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="title">
          <p title={primary.name}>
            {primary.name?.slice(0, 80)}{primary.name?.length > 80 ? '...' : ''}
          </p>
        </div>

        {/* Price comparison */}
        <div className="combined-prices">
          <div className="combined-price-item">
            <span className="combined-price-label">{primaryConfig.label}</span>
            <span className="price-prominent" style={{ fontSize: '16px' }}>
              {primaryPrice ? `$${primaryPrice.toFixed(2)}` : '—'}
            </span>
            <a href={primary.product_url} target="_blank" rel="noreferrer" className="combined-view-link">
              View ↗
            </a>
          </div>
          <div className="combined-price-divider" />
          <div className="combined-price-item">
            <span className="combined-price-label">{secondaryConfig.label}</span>
            <span className="price-prominent" style={{ fontSize: '16px' }}>
              {secondaryPrice ? `$${secondaryPrice.toFixed(2)}` : '—'}
            </span>
            <a href={secondary.product_url} target="_blank" rel="noreferrer" className="combined-view-link">
              View ↗
            </a>
          </div>
        </div>

        {/* Rating */}
        {formattedRating && (
          <div className="rating">
            <span className="stars">{formattedRating.stars}</span>
            <span className="review-count">{formattedRating.rating} {formattedRating.reviews}</span>
          </div>
        )}

        {/* Sentiment */}
        {sentiment && (
          <div className="sentiment-row">
            <SentimentBadge sentiment={sentiment} brandName={sentimentBrand || primary.brand} />
          </div>
        )}

        {/* Add buttons */}
        <div className="combined-actions">
          <button
            onClick={() => handleAdd(primary, primarySrc)}
            className={`add-to-list-btn ${(primaryInList || addingSrc === primarySrc) ? 'added' : ''}`}
            disabled={primaryInList || !!addingSrc}
          >
            {primaryInList ? '✓ In List' : addingSrc === primarySrc ? 'Adding…' : `+ ${primaryConfig.label}`}
          </button>
          <button
            onClick={() => handleAdd(secondary, secondarySrc)}
            className={`add-to-list-btn ${(secondaryInList || addingSrc === secondarySrc) ? 'added' : ''}`}
            disabled={secondaryInList || !!addingSrc}
          >
            {secondaryInList ? '✓ In List' : addingSrc === secondarySrc ? 'Adding…' : `+ ${secondaryConfig.label}`}
          </button>
        </div>
      </div>
    </div>
  );
});

export default CombinedResultItem;
