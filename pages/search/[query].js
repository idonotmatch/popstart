import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ResultItem from '../../components/ResultItem';
import CartSummary from '../../components/CartSummary';
import ToastContainer from '../../components/ToastContainer';
import Cart from '../../components/cart';
import { useSearch } from '../../context/SearchContext';
import { useCart } from '../../context/CartContext';

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
  const [toasts, setToasts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { setSearchResults, getSearchResults } = useSearch();
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    addToast(`${item.title.slice(0, 30)}${item.title.length > 30 ? '...' : ''} added to cart`);
  };

  const handleCartToggle = () => {
    setIsCartOpen(prevState => !prevState);
  };

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

  const renderResultsColumn = (source) => {
    const results = source === 'amazon' ? displayedResults.amazon : displayedResults.walmart;
    const isLoading = source === 'amazon' ? loading.amazon : loading.walmart;
    const errorMessage = source === 'amazon' ? error.amazon : error.walmart;

    return (
      <div className={`column ${source}-results`}>
        <div className="column-header">{source.charAt(0).toUpperCase() + source.slice(1)} Results</div>
        <div className="results-scroll">
          {isLoading ? (
            <p>Searching {source}</p>
          ) : errorMessage ? (
            <div className={`error-box ${source}-error`}>
              <h3>{source.charAt(0).toUpperCase() + source.slice(1)} Results Unavailable</h3>
              <p>{errorMessage}</p>
              <p>We're working on resolving this issue. In the meantime, you can still view other results.</p>
            </div>
          ) : results.length === 0 ? (
            <p className="no-results">No {source} results found.</p>
          ) : (
            results.map((item, index) => (
              <ResultItem 
                key={index} 
                item={item} 
                addToast={addToast}
                onAddToCart={handleAddToCart}
              />
            ))
          )}
        </div>
      </div>
    );
  };

  const shouldShowPagination = useCallback(() => {
    const maxPages = Math.max(totalPages.amazon, totalPages.walmart);
    return !loading.amazon && !loading.walmart && 
           (displayedResults.amazon.length > 0 || displayedResults.walmart.length > 0) && 
           maxPages > 1;
  }, [loading.amazon, loading.walmart, displayedResults.amazon.length, displayedResults.walmart.length, totalPages]);

  return (
    <div className="page-container">
      <Header />
      <CartSummary 
        cartItemCount={cart.items.length}
        onCartClick={handleCartToggle}
      />
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
        {error.general && <p className="error">{error.general}</p>}
        {query && (
          <div className="results-container">
            {(source === 'all' || source === 'amazon') && renderResultsColumn('amazon')}
            {(source === 'all' || source === 'walmart') && renderResultsColumn('walmart')}
          </div>
        )}
        {query && !loading.amazon && !loading.walmart && displayedResults.amazon.length === 0 && displayedResults.walmart.length === 0 && (
          <p className="no-results">No results found. Try another search.</p>
        )}
        {shouldShowPagination() && (
          <div className="pagination">
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
            <span>Page {page} of {Math.max(totalPages.amazon, totalPages.walmart)}</span>
            <button onClick={() => handlePageChange(page + 1)} disabled={page >= Math.max(totalPages.amazon, totalPages.walmart)}>Next</button>
          </div>
        )}
      </div>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
      {isCartOpen && (
        <Cart
          items={cart.items}
          onClose={handleCartToggle}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      )}
      <Footer />
    </div>
  );
}

export default SearchPage;