import React, { useState } from 'react';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSearchAttempted(true);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ searchTerm }),
      });

      if (!response.ok) {
        setError(`Error: ${response.statusText}`);
        setResults([]);
        return;
      }

      const data = await response.json();
      if (!data.search_results || data.search_results.length === 0) {
        setError('No results found');
        setResults([]);
      } else {
        setResults(data.search_results);
        setError('');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch results');
    } finally {
      setLoading(false);
    }
  };

  const searchFormClass = results.length > 0 ? 'search-top' : 'search-center';

  return (
    <div className="container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="what are we looking for today?"
        />
        <button type="submit" className="search-button">go.</button>
      </form>
      <div id="searchResults">
        {loading && <p>searching</p>}
        {error && <p>Error: {error}</p>}
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.asin} className="result-item">
              <div className="image"><img src={item.image} alt={item.title} /></div>
              <div className="brand"><p>Brand: {item.brand?.slice(0, 20)}{item.brand?.length > 20 ? '...' : ''}</p></div>
              <div className="title"><p>{item.title?.slice(0, 40)}{item.title?.length > 40 ? '...' : ''}</p></div>
              <div className="rating"><p>Rating: {item.rating} ({item.ratings_total} reviews)</p></div>
              <div className="link"><a href={item.link} target="_blank" rel="noreferrer">Amazon link</a></div>
              <div className="price"><p>Price: {item.price?.raw ?? 'Not available'}</p></div>
            </div>
          ))
        ) : (
          searchAttempted && !loading && <p>No results found. Try another search.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
