import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);  // Might not be needed here anymore.
  const [results, setResults] = useState([]);  // Might not be needed here anymore.
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    document.title = "Curious Trio - Search";
    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm, page]);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/search?term=${encodeURIComponent(searchTerm)}&page=${page}`, {
        method: 'GET', // Consider changing to POST if your API requires it
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setResults(page === 1 ? data.results : [...results, ...data.results]);
      setHasMore(data.results.length > 0);
      setError('');
    } catch (error) {
      setError(error.message);
      setResults([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}`);
    } else {
      setError('Please enter a valid search term');
      setSearchAttempted(true);
      setResults([]);  // Might not be needed here anymore.
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="start here."
          />
          <button type="submit" className="search-button">go.</button>
        </form>
        <div id="searchResults">
          {searchAttempted && !loading && !results.length && <p>No results found. Try another search.</p>}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
