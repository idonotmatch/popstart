import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useMediaQuery } from 'react-responsive';
import { useSearch } from '../../context/SearchContext';

function SearchPage() {
  const router = useRouter();
  const { query } = router.query;
  const [searchTerm, setSearchTerm] = useState(query || '');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const { setSearchResults, getSearchResults } = useSearch();

  // Refs for scroll containers
  const amazonRef = useRef(null);
  const walmartRef = useRef(null);

  // State for scroll positions
  const [scrollPositions, setScrollPositions] = useState({
    amazon: 0,
    walmart: 0,
  });

  const fetchResults = useCallback(async () => {
    if (!query) return;

    const cachedResults = getSearchResults(query);
    if (cachedResults) {
      setResults(cachedResults);
      setFilteredResults(cachedResults);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/search?term=${encodeURIComponent(query)}`, {
        method: 'GET',
      });

      if (!response.ok)
        throw new Error('Network response was not ok');

      const data = await response.json();
      if (!data.results)
        throw new Error('Invalid API response');

      console.log('Fetched data:', data);

      setResults(data.results);
      setFilteredResults(data.results);
      setError('');
      setSearchResults(query, data.results);
    } catch (error) {
      setError(error.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [query, getSearchResults, setSearchResults]);

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query, fetchResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}`);
    } else {
      setError('Please enter a valid search term');
    }
  };

  const filterAndAlternateResults = () => {
    const amazonResults = results.filter((result) => result.link.includes('amazon.com'));
    const walmartResults = results.filter((result) => result.link.includes('walmart.com'));

    if (activeTab === 'all') {
      const alternated = [];
      const maxLength = Math.max(amazonResults.length, walmartResults.length);

      for (let i = 0; i < maxLength; i++) {
        if (amazonResults[i]) alternated.push(amazonResults[i]);
        if (walmartResults[i]) alternated.push(walmartResults[i]);
      }

      setFilteredResults(alternated);
    } else if (activeTab === 'amazon') {
      setFilteredResults(amazonResults);
    } else if (activeTab === 'walmart') {
      setFilteredResults(walmartResults);
    }
  };

  useEffect(() => {
    filterAndAlternateResults();
  }, [results, activeTab]);

  // Handle tab change and restore scroll position
  const handleTabChange = (tab) => {
    // Save current scroll position
    if (activeTab === 'amazon' && amazonRef.current) {
      setScrollPositions((prev) => ({
        ...prev,
        amazon: amazonRef.current.scrollTop,
      }));
    } else if (activeTab === 'walmart' && walmartRef.current) {
      setScrollPositions((prev) => ({
        ...prev,
        walmart: walmartRef.current.scrollTop,
      }));
    }

    // Change active tab
    setActiveTab(tab);

    // Restore scroll position for the new tab
    setTimeout(() => {
      if (tab === 'amazon' && amazonRef.current) {
        amazonRef.current.scrollTop = scrollPositions.amazon;
      } else if (tab === 'walmart' && walmartRef.current) {
        walmartRef.current.scrollTop = scrollPositions.walmart;
      }
    }, 0);
  };

  const renderResults = (results) => {
    return results.map((item, index) => (
      <div key={index} className="result-item">
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
  };

  return (
    <div className="page-container">
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
        {results.length > 0 && (
          <>
            <div className="tabs">
              <button className={activeTab === 'all' ? 'active' : ''} onClick={() => handleTabChange('all')}>All Results</button>
              <button className={activeTab === 'amazon' ? 'active' : ''} onClick={() => handleTabChange('amazon')}>Amazon</button>
              <button className={activeTab === 'walmart' ? 'active' : ''} onClick={() => handleTabChange('walmart')}>Walmart</button>
            </div>
            <p className="affiliate-disclaimer">
              *purchase links are associate/affiliate links and I may (or may not) earn from qualifying purchases
            </p>  
          </>
        )}
        <div id="searchResults">
          {loading && <p className="loading">searching.</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && filteredResults.length === 0 && (
            <p className="no-results">No results found. Try another search.</p>
          )}
          {!loading && !error && filteredResults.length > 0 && activeTab === 'all' && isDesktop && (
            <div className="results-container">
              <div className="column rainforest-results" ref={amazonRef}>
                {renderResults(results.filter((result) => result.link.includes('amazon.com')))}
              </div>
              <div className="column bluecart-results" ref={walmartRef}>
                {renderResults(results.filter((result) => result.link.includes('walmart.com')))}
              </div>
            </div>
          )}
          {!loading && !error && filteredResults.length > 0 && (!isDesktop || activeTab !== 'all') && (
            <div className="results-container single-column">
              <div className="column" ref={activeTab === 'amazon' ? amazonRef : walmartRef}>
                {renderResults(filteredResults)}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
