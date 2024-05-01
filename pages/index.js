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
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    document.title = "Curious Trio - Search";
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
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
