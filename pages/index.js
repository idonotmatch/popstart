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
    <div>
      <form onSubmit={handleSearch} className={`search-form ${searchFormClass}`}>
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="start here"
        />
        <button type="submit" className="search-button">let's go.</button>
      </form>
      <div className="container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div id="searchResults">
          {results.length > 0 ? (
            results.map((item) => (
              <div key={item.asin} className="result-item">
                <h2>{item.title}</h2>
                <p>Brand: {item.brand}</p>
                <p>Rating: {item.rating} ({item.ratings_total} reviews)</p>
                {item.image && (
                  <img src={item.image} alt={item.title} />
                )}
                <a href={item.link} target="_blank" rel="noreferrer">View Product</a>
                <p>Price: {item.price.raw}</p>
              </div>
            ))
          ) : (
            searchAttempted && !loading && <p>No results found. Try another search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
