import React, { useState } from 'react';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

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
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="What are we looking for today?"
          style={{ marginRight: "10px", padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div id="searchResults">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.asin} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <h2>{item.title}</h2>
              <p>Brand: {item.brand}</p>
              <p>Rating: {item.rating} ({item.ratings_total} reviews)</p>
              {item.image && (
                <img src={item.image} alt={item.title} style={{ maxWidth: "100px", marginBottom: "10px" }} />
              )}
              <a href={item.link} target="_blank" rel="noreferrer">View Product</a>
              <p>Price: {item.price.raw}</p>
            </div>
          ))
        ) : (
          !loading && <p>No results found. Try another search.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
