import React from 'react';

const ResultItem = React.memo(({ item }) => (
  <div key={item.asin} className="result-item">
    <div className="image"><img src={item.image} alt={item.title} /></div>
    <div className="details">
      <div className="title">
        <p
          title={item.title}
          className={`${item.title?.length > 80 ? 'tooltip' : ''}`}
        >{item.title?.slice(0, 80)}{item.title?.length > 80 ? '...' : ''}</p>
      </div>
      <div className="brand"><p>Brand: {item.brand ? item.brand.slice(0, 40) : 'Not Found'}{item.brand && item.brand.length > 40 ? '...' : ''}</p></div>
      <div className="rating"><p>Rating: {item.rating ? item.rating : 'Not Found'} ({item.ratingsTotal ? `${item.ratingsTotal.toLocaleString()} ${item.ratingsTotal === 1 ? 'review' : 'reviews'}` : 'No reviews'})</p></div>
      <div className="price"><p>Price: {item.price ? item.price : 'Not Found'}</p></div>
      <div className="link"><a href={item.link} target="_blank" rel="noreferrer">{item.link.includes('amazon.com') ? 'Shop Amazon' : 'Shop Walmart'}</a></div>
    </div>
  </div>
));

export default ResultItem;