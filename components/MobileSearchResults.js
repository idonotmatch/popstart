import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MobileSearchResults = ({ amazonResults, walmartResults }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (source, index) => {
    setExpandedItems(prev => ({
      ...prev,
      [source]: {
        ...prev[source],
        [index]: !prev[source]?.[index]
      }
    }));
  };

  const renderResultList = (results, source) => (
    <div className={`result-list ${source}-results`}>
      <h2 className="source-header">{source.charAt(0).toUpperCase() + source.slice(1)} Results</h2>
      {results.map((item, index) => (
        <div key={index} className="result-card">
          <div className="result-header" onClick={() => toggleItem(source, index)}>
            <img src={item.image} alt={item.title} className="result-image" />
            <div className="result-title">{item.title.slice(0, 50)}...</div>
            {expandedItems[source]?.[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {expandedItems[source]?.[index] && (
            <div className="result-details">
              <div className="result-price">Price: {item.price}</div>
              <div className="result-rating">Rating: {item.rating} ({item.ratingsTotal} reviews)</div>
              <a href={item.link} className="result-link" target="_blank" rel="noopener noreferrer">
                View on {source}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mobile-search-results">
      {amazonResults.length > 0 && renderResultList(amazonResults, 'amazon')}
      {walmartResults.length > 0 && renderResultList(walmartResults, 'walmart')}
    </div>
  );
};

export default MobileSearchResults;