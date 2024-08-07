import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { useMediaQuery } from 'react-responsive';
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
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const { setSearchResults, getSearchResults } = useSearch();

  const amazonRef = useRef(null);
  const walmartRef = useRef(null);

  const fetchWithRetry = async (url, options, retries = 3, delay = 1000) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      if (retries > 0 && !options.signal.aborted) {
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2);
      } else {
        throw error;
      }
    }
  };

  const fetchSource = async (src) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      console.log(`Request to ${src} timed out after 60 seconds`);
    }, 60000); // 60 second timeout

    try {
      const data = await fetchWithRetry(
        `/api/search?term=${encodeURIComponent(query)}&sort_by=${encodeURIComponent(sortBy)}&page=${page}&source=${src}`,
        { method: 'GET', signal: controller.signal },
        3, // Number of retries
        1000 // Initial delay between retries (doubles each retry)
      );

      console.log(`API response from ${src}:`, data);

      setAllResults(prev => ({ ...prev, [src]: data[0]?.results || [] }));
      setDisplayedResults(prev => ({ ...prev, [src]: data[0]?.results || [] }));
      setTotalPages(prev => ({ ...prev, [src]: data[0]?.totalPages || 1 }));
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error(`Request to ${src} was aborted: ${error.message}`);
        setError(prev => ({ ...prev, [src]: `Request timed out. Please try again.` }));
      } else {
        console.error(`Error fetching data from ${src}:`, error.message);
        setError(prev => ({ ...prev, [src]: `Failed to fetch data: ${error.message}` }));
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(prev => ({ ...prev, [src]: false }));
    }
  };

  const fetchResults = useCallback(async () => {
    if (!query) return;

    console.log('Fetching results for query:', query, 'sortBy:', sortBy, 'page:', page);
    const cacheKey = `${query}:${sortBy}:${page}:all`;
    const cachedResults = getSearchResults(cacheKey);
    if (cachedResults) {
      console.log('Using cached results:', cachedResults);
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

    await Promise.all([fetchSource('amazon'), fetchSource('walmart')]);

  }, [query, sortBy, page, getSearchResults]);

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query, sortBy, page, fetchResults]);

  useEffect(() => {
    if (source === 'all') {
      setDisplayedResults(allResults);
    } else {
      setDisplayedResults({
        ...allResults,
        [source === 'amazon' ? 'walmart' : 'amazon']: []
      });
    }
  }, [source, allResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}?sort_by=${encodeURIComponent(sortBy)}&source=all&page=1`);
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
    // We're not pushing a new route here, just updating the state
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    router.push(`/search/${encodeURIComponent(query)}?sort_by=${encodeURIComponent(sortBy)}&source=${encodeURIComponent(source)}&page=${newPage}`, undefined, { shallow: true });
  };

  const renderResults = (items) => {
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
          <div className="link"><a href={item.link} target="_blank" rel="noreferrer">{item.source === 'amazon' ? 'Shop Amazon' : 'Shop Walmart'}</a></div>
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
            {!loading.amazon && !loading.walmart && displayedResults.amazon.length === 0 && displayedResults.walmart.length === 0 && (
              <p className="no-results">No results found. Try another search.</p>
            )}
            <div className="results-container">
              {(source === 'all' || source === 'amazon') && (
                <div className="column rainforest-results">
                  <div className="column-header">Amazon Results</div>
                  <div className="results-scroll" ref={amazonRef}>
                    {loading.amazon ? <p>Searching Amazon</p> : renderResults(displayedResults.amazon)}
                    {error.amazon && <p className="error">{error.amazon}</p>}
                  </div>
                </div>
              )}
              {(source === 'all' || source === 'walmart') && (
                <div className="column bluecart-results">
                  <div className="column-header">Walmart Results</div>
                  <div className="results-scroll" ref={walmartRef}>
                    {loading.walmart ? <p>Searching Walmart</p> : renderResults(displayedResults.walmart)}
                    {error.walmart && <p className="error">{error.walmart}</p>}
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