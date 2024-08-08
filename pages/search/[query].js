import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useSearch } from '../../context/SearchContext';

function SearchPage() {
  const router = useRouter();
  const { query } = router.query;
  const [sortBy, setSortBy] = useState(router.query.sort_by || '');
  const [source, setSource] = useState(router.query.source || 'all');
  const [page, setPage] = useState(parseInt(router.query.page || '1'));
  const [searchTerm, setSearchTerm] = useState(query || '');
  const [loading, setLoading] = useState({ amazon: false, walmart: false });
  const [allResults, setAllResults] = useState({ amazon: [], walmart: [] });
  const [displayedResults, setDisplayedResults] = useState({ amazon: [], walmart: [] });
  const [totalPages, setTotalPages] = useState({ amazon: 1, walmart: 1 });
  const [error, setError] = useState({});
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { setSearchResults, getSearchResults } = useSearch();

  const fetchResults = useCallback(async () => {
    if (!query) return;

    const cacheKey = `${query}:${sortBy}:${page}:${source}`;
    const cachedResults = getSearchResults(cacheKey);
    if (cachedResults) {
      setAllResults(cachedResults.results);
      setDisplayedResults(cachedResults.results);
      setTotalPages(cachedResults.totalPages);
      setLoading({ amazon: false, walmart: false });
      return;
    }

    setLoading({ amazon: true, walmart: true });
    setError({});
    setAllResults({ amazon: [], walmart: [] });
    setDisplayedResults({ amazon: [], walmart: [] });
    setTotalPages({ amazon: 1, walmart: 1 });

    try {
      const response = await fetch(`/api/search?term=${encodeURIComponent(query)}&sort_by=${encodeURIComponent(sortBy)}&page=${page}&source=${source}`);
      const data = await response.json();

      const newResults = {
        amazon: data.find(r => r.source === 'amazon')?.results || [],
        walmart: data.find(r => r.source === 'walmart')?.results || []
      };
      const newTotalPages = {
        amazon: data.find(r => r.source === 'amazon')?.totalPages || 1,
        walmart: data.find(r => r.source === 'walmart')?.totalPages || 1
      };
      const newErrors = {
        amazon: data.find(r => r.source === 'amazon')?.error,
        walmart: data.find(r => r.source === 'walmart')?.error
      };

      setAllResults(newResults);
      setDisplayedResults(newResults);
      setTotalPages(newTotalPages);
      setError(newErrors);
      setSearchResults(cacheKey, { results: newResults, totalPages: newTotalPages });
    } catch (error) {
      setError({ general: 'Failed to fetch results. Please try again.' });
    } finally {
      setLoading({ amazon: false, walmart: false });
    }
  }, [query, sortBy, page, source, getSearchResults, setSearchResults]);

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query, sortBy, page, source, fetchResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}?sort_by=${encodeURIComponent(sortBy)}&source=${encodeURIComponent(source)}&page=1`);
    } else {
      setError({ general: 'Please enter a valid search term' });
    }
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    router.push(`/search/${encodeURIComponent(query)}?sort_by=${encodeURIComponent(newSortBy)}&source=${encodeURIComponent(source)}&page=1`, undefined, { shallow: true });
  };

  const handleSourceChange = (e) => {
    const newSource = e.target.value;
    setSource(newSource);
    router.push(`/search/${encodeURIComponent(query)}?sort_by=${encodeURIComponent(sortBy)}&source=${encodeURIComponent(newSource)}&page=1`, undefined, { shallow: true });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    router.push(`/search/${encodeURIComponent(query)}?sort_by=${encodeURIComponent(sortBy)}&source=${encodeURIComponent(source)}&page=${newPage}`, undefined, { shallow: true });
  };

  const renderResults = (items, source) => {
    return items.map((item, index) => (
      <div key={index} className="result-item">
        <div className="image"><img src={item.image} alt={item.title || 'Product image'} /></div>
        <div className="details">
          <div className="title">
            <p title={item.title} className={`${item.title && item.title.length > 80 ? 'tooltip' : ''}`}>
              {item.title ? (item.title.length > 80 ? `${item.title.slice(0, 80)}...` : item.title) : 'Title not available'}
            </p>
          </div>
          <div className="rating">
            <p>
              Rating: {item.rating !== '0.0' ? item.rating : 'Not Found'} 
              {item.ratingsTotal > 0 ? ` (${item.ratingsTotal.toLocaleString()} ${item.ratingsTotal === 1 ? 'review' : 'reviews'})` : ' (No reviews)'}
            </p>
          </div>
          <div className="price"><p>Price: {item.price || 'Not Found'}</p></div>
          <div className="link"><a href={item.link} target="_blank" rel="noreferrer">Shop {source}</a></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="start here."
            />
            <button type="submit" className="search-button">go.</button>
          </div>
          <div className="search-modifiers">
            <select 
              value={sortBy} 
              onChange={handleSortChange} 
              className="modifier-select"
            >
              <option value="">Default</option>
              <option value="price_low_to_high">Price (low to high)</option>
              <option value="price_high_to_low">Price (high to low)</option>
              <option value="most_recent">Most Recent</option>
              <option value="average_review">Avg. Customer Review</option>
            </select>
            <select
              value={source}
              onChange={handleSourceChange}
              className="modifier-select"
            >
              <option value="all">All Sources</option>
              <option value="amazon">Amazon</option>
              <option value="walmart">Walmart</option>
            </select>
          </div>
        </form>
        <p className="affiliate-disclaimer">
          *purchase links are associate/affiliate links and I may (or may not) earn from qualifying purchases
        </p>
        {query && (
          <div id="searchResults">
            {error.general && <p className="error">{error.general}</p>}
            {error.walmart && (
              <div className="error-box walmart-error">
                <h3>Walmart Results Unavailable</h3>
                <p>{error.walmart}</p>
                <p>We're working on resolving this issue. In the meantime, you can still view Amazon results.</p>
              </div>
            )}
            {error.amazon && (
              <div className="error-box amazon-error">
                <h3>Amazon Results Unavailable</h3>
                <p>{error.amazon}</p>
                <p>We're working on resolving this issue. In the meantime, you can still view Walmart results.</p>
              </div>
            )}
            {!loading.amazon && !loading.walmart && displayedResults.amazon.length === 0 && displayedResults.walmart.length === 0 && (
              <p className="no-results">No results found. Try another search.</p>
            )}
            <div className="results-container">
              {(source === 'all' || source === 'amazon') && (
                <div className="column rainforest-results">
                  <div className="column-header">Amazon Results</div>
                  <div className="results-scroll">
                    {loading.amazon ? <p>Searching Amazon</p> : renderResults(displayedResults.amazon, 'Amazon')}
                  </div>
                </div>
              )}
              {(source === 'all' || source === 'walmart') && (
                <div className="column bluecart-results">
                  <div className="column-header">Walmart Results</div>
                  <div className="results-scroll">
                    {loading.walmart ? <p>Searching Walmart</p> : renderResults(displayedResults.walmart, 'Walmart')}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {query && !loading.amazon && !loading.walmart && (displayedResults.amazon.length > 0 || displayedResults.walmart.length > 0) && (
          <div className="pagination">
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
            <span>Page {page} of {Math.max(totalPages.amazon, totalPages.walmart)}</span>
            <button onClick={() => handlePageChange(page + 1)} disabled={page >= Math.max(totalPages.amazon, totalPages.walmart)}>Next</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;