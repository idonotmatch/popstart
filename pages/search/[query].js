import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ResultItem from '../../components/ResultItem';
import CombinedResultItem from '../../components/CombinedResultItem';
import ToastContainer from '../../components/ToastContainer';
import Cart from '../../components/cart';
import { useSearch } from '../../context/SearchContext';
import { useList } from '../../context/ListContext';

function SearchPage({ initialQuery, initialSortBy, initialSource, initialPage }) {
  const router = useRouter();
  const { query } = router.query;
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [source, setSource] = useState(initialSource);
  const [page, setPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState(initialQuery || '');
  const [loading, setLoading] = useState({ amazon: false, walmart: false });
  const [allResults, setAllResults] = useState({ amazon: [], walmart: [] });
  const [displayedResults, setDisplayedResults] = useState({ amazon: [], walmart: [] });
  const [totalPages, setTotalPages] = useState({ amazon: 1, walmart: 1 });
  const [error, setError] = useState({});
  const [toasts, setToasts] = useState([]);
  const [isListOpen, setIsListOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [sentimentData, setSentimentData] = useState({});

  const { setSearchResults, getSearchResults } = useSearch();
  const { list, addToList, removeFromList, updateQuantity } = useList();

  const addToast = (message) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const handleAddToList = (item) => {
    const formattedItem = {
      product_id: item.product_id,
      name: item.title,
      price: item.price,
      quantity: 1,
      image_url: item.image,
      source: item.source,
      brand: item.brand,
      product_url: item.link,
      rating: item.rating,
      review_count: item.ratingsTotal,
      availability: item.availability,
      full_description: item.full_description,
      small_description: item.small_description,
      product_category: item.product_category,
      model: item.model,
      shipping_price: item.shipping_price,
      shipping_time: item.shipping_time,
      is_coupon_exists: item.is_coupon_exists,
      coupon_text: item.coupon_text,
      feature_bullets: item.feature_bullets,
      brand_url: item.brand_url,
      shipping_condition: item.shipping_condition,
      shipping_details_url: item.shipping_details_url,
      images: item.images,
      average_rating: item.average_rating,
      fabric_type: item.fabric_type,
      care_instructions: item.care_instructions,
      origin: item.origin,
      pattern: item.pattern,
      country_of_origin: item.country_of_origin
    };
    addToList(formattedItem);
  };

  const handleListToggle = () => {
    setIsListOpen(prevState => !prevState);
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

    const sources = source === 'all' ? ['amazon', 'walmart'] : [source];
    const initialLoading = { amazon: false, walmart: false };
    sources.forEach(s => { initialLoading[s] = true; });
    setLoading(initialLoading);
    setError({});
    setAllResults({ amazon: [], walmart: [] });
    setDisplayedResults({ amazon: [], walmart: [] });
    setTotalPages({ amazon: 1, walmart: 1 });

    // Collect final values for cache after all fetches complete
    const collected = { results: { amazon: [], walmart: [] }, totalPages: { amazon: 1, walmart: 1 } };

    const fetchSource = async (src) => {
      try {
        const res = await fetch(`/api/search?term=${encodeURIComponent(query)}&sort_by=${encodeURIComponent(sortBy)}&page=${page}&source=${src}`);
        const data = await res.json();
        const srcData = Array.isArray(data) ? (data.find(r => r.source === src) || data[0]) : data;
        const results = srcData?.results || [];
        const pages = srcData?.totalPages || 1;
        collected.results[src] = results;
        collected.totalPages[src] = pages;
        // Update state immediately as each source resolves — no waiting for the other
        setAllResults(prev => ({ ...prev, [src]: results }));
        setDisplayedResults(prev => ({ ...prev, [src]: results }));
        setTotalPages(prev => ({ ...prev, [src]: pages }));
        if (srcData?.error) setError(prev => ({ ...prev, [src]: srcData.error }));
      } catch {
        setError(prev => ({ ...prev, [src]: 'Failed to fetch results. Please try again.' }));
      } finally {
        setLoading(prev => ({ ...prev, [src]: false }));
      }
    };

    await Promise.all(sources.map(fetchSource));
    setSearchResults(cacheKey, { results: collected.results, totalPages: collected.totalPages });
  }, [query, sortBy, page, source, getSearchResults, setSearchResults]);

  useEffect(() => {
    if (query) {
      fetchResults();
      setSentimentData({});
    }
  }, [query, sortBy, page, source, fetchResults]);

  // Fetch brand trust scores — one request per unique brand (much more efficient)
  useEffect(() => {
    const allItems = [
      ...displayedResults.amazon,
      ...displayedResults.walmart,
    ];

    // Extract brand from product name when the brand field is missing/N/A
    // (ScraperAPI search listings often omit the brand field)
    const GENERIC_WORDS = new Set([
      'Wireless', 'Bluetooth', 'Noise', 'Active', 'Over', 'On', 'In', 'True',
      'Premium', 'Pro', 'Ultra', 'Mini', 'Smart', 'Sport', 'Sports',
      'New', 'Best', 'Top', 'High', 'Low', 'Fast', 'Quick',
      'Pack', 'Set', 'Bundle', 'Pair', 'Lot', 'Box',
      'Restored', 'Refurbished', 'Renewed', 'Certified', 'Pre-Owned',
      'The', 'For', 'With', 'And', 'Big', 'Small',
    ]);
    function guessBrand(item) {
      if (item.brand && item.brand !== 'N/A' && !GENERIC_WORDS.has(item.brand)) return item.brand;
      const first = ((item.name || '').split(/\s+/)[0] || '').replace(/[^\w-]/g, '');
      return (first.length >= 2 && /^[A-Z]/.test(first) && !GENERIC_WORDS.has(first)) ? first : null;
    }

    // Get unique brands, skip N/A / missing
    const brands = [...new Set(
      allItems
        .map(guessBrand)
        .filter(b => b && b !== 'N/A' && b.trim().length > 1)
    )];

    if (brands.length === 0) return;

    // Infer category from search query for better Reddit targeting
    const category = query || '';

    // Mark all brands as loading
    const loadingState = {};
    brands.forEach(b => { loadingState[b] = { loading: true }; });
    setSentimentData(loadingState);

    // Fetch in sequence with 400ms gap to respect Reddit rate limits
    let cancelled = false;
    (async () => {
      for (let i = 0; i < brands.length; i++) {
        if (cancelled) break;
        const brand = brands[i];
        try {
          const params = new URLSearchParams({ brand, category });
          const res = await fetch(`/api/sentiment?${params}`);
          const data = await res.json();
          if (!cancelled) {
            setSentimentData(prev => ({ ...prev, [brand]: { loading: false, ...data } }));
          }
        } catch {
          if (!cancelled) {
            setSentimentData(prev => ({ ...prev, [brand]: { loading: false, available: false } }));
          }
        }
        if (i < brands.length - 1) await new Promise(r => setTimeout(r, 400));
      }
    })();

    return () => { cancelled = true; };
  }, [displayedResults, query]);

  // Sync active tab when source filter changes
  useEffect(() => {
    if (source === 'amazon') setActiveTab('amazon');
    else if (source === 'walmart') setActiveTab('walmart');
    else setActiveTab('all');
  }, [source]);

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

  const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') return parseFloat(price.replace(/[^0-9.-]+/g, ''));
    return null;
  };

  const SkeletonCard = () => (
    <div className="skeleton-card">
      <div className="skeleton-img skeleton-shimmer" />
      <div className="skeleton-details">
        <div className="skeleton-badge skeleton-shimmer" />
        <div className="skeleton-line skeleton-shimmer" style={{width: '90%'}} />
        <div className="skeleton-line skeleton-shimmer" style={{width: '60%'}} />
        <div className="skeleton-price skeleton-shimmer" />
        <div className="skeleton-line skeleton-shimmer" style={{width: '40%'}} />
      </div>
    </div>
  );

  // ── Product deduplication ─────────────────────────────────────────────────
  const STOPWORDS = new Set(['the','a','an','with','for','and','or','in','on','of',
    'to','by','at','from','new','black','white','gray','grey','blue','red','pink',
    'wireless','bluetooth','headphones','earbuds','earphones','headset']);

  function tokenize(name) {
    return (name || '').toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length > 1 && !STOPWORDS.has(w));
  }

  function jaccardSimilarity(a, b) {
    const setA = new Set(tokenize(a));
    const setB = new Set(tokenize(b));
    if (setA.size === 0 || setB.size === 0) return 0;
    const intersection = [...setA].filter(x => setB.has(x)).length;
    const union = new Set([...setA, ...setB]).size;
    return intersection / union;
  }

  function deduplicateResults() {
    // Deduplicate within each source by product_id first
    const dedupeById = (items) => {
      const seen = new Set();
      return items.filter(i => {
        if (!i.product_id || seen.has(i.product_id)) return false;
        seen.add(i.product_id);
        return true;
      });
    };
    const amazon = dedupeById(displayedResults.amazon).map(i => ({ ...i, _src: 'amazon' }));
    const walmart = dedupeById(displayedResults.walmart).map(i => ({ ...i, _src: 'walmart' }));
    const THRESHOLD = 0.38;

    const usedWalmart = new Set();
    const combined = [];

    for (const a of amazon) {
      let bestMatch = null;
      let bestScore = 0;
      for (let wi = 0; wi < walmart.length; wi++) {
        if (usedWalmart.has(wi)) continue;
        const w = walmart[wi];
        // Brand must match if both have one
        if (a.brand && w.brand && a.brand !== 'N/A' && w.brand !== 'N/A') {
          if (a.brand.toLowerCase() !== w.brand.toLowerCase()) continue;
        }
        const sim = jaccardSimilarity(a.name, w.name);
        if (sim > bestScore && sim >= THRESHOLD) {
          bestScore = sim;
          bestMatch = { item: w, idx: wi };
        }
      }

      if (bestMatch) {
        usedWalmart.add(bestMatch.idx);
        combined.push({ type: 'combined', primary: a, secondary: bestMatch.item });
      } else {
        combined.push({ type: 'single', item: a, _src: 'amazon' });
      }
    }

    // Remaining Walmart items with no Amazon match
    walmart.forEach((w, wi) => {
      if (!usedWalmart.has(wi)) {
        combined.push({ type: 'single', item: w, _src: 'walmart' });
      }
    });

    return combined;
  }

  const renderTabContent = (src) => {
    const isAllTab = src === 'all';
    const isLoading = isAllTab ? (loading.amazon || loading.walmart) : (src === 'amazon' ? loading.amazon : loading.walmart);
    const errorMessage = isAllTab ? null : (src === 'amazon' ? error.amazon : error.walmart);

    const GENERIC_BRAND_WORDS = new Set([
      'Wireless', 'Bluetooth', 'Noise', 'Active', 'Over', 'On', 'In', 'True',
      'Premium', 'Pro', 'Ultra', 'Mini', 'Smart', 'Sport', 'Sports',
      'New', 'Best', 'Top', 'High', 'Low', 'Fast', 'Quick',
      'Pack', 'Set', 'Bundle', 'Pair', 'Lot', 'Box',
      'Restored', 'Refurbished', 'Renewed', 'Certified', 'Pre-Owned',
      'The', 'For', 'With', 'And', 'Big', 'Small',
    ]);
    const guessBrand = (item) => {
      if (item.brand && item.brand !== 'N/A' && !GENERIC_BRAND_WORDS.has(item.brand)) return item.brand;
      const first = ((item.name || '').split(/\s+/)[0] || '').replace(/[^\w-]/g, '');
      return (first.length >= 2 && /^[A-Z]/.test(first) && !GENERIC_BRAND_WORDS.has(first)) ? first : null;
    };

    const toResultItem = (item, itemSrc, index) => {
      const brand = guessBrand(item);
      return (
        <ResultItem
          key={`${itemSrc}-${item.product_id || index}`}
          item={{
            ...item,
            source: itemSrc,
            product_id: item.product_id,
            title: item.name,
            price: parsePrice(item.price),
            image: item.image_url,
            link: item.product_url,
            rating: item.rating ? parseFloat(item.rating) : null,
            ratingsTotal: item.review_count,
          }}
          addToast={addToast}
          onAddToCart={handleAddToList}
          sentiment={sentimentData[brand]}
          sentimentBrand={brand}
        />
      );
    };

    const renderAllTab = () => {
      const deduped = deduplicateResults();
      return deduped.map((entry, index) => {
        if (entry.type === 'combined') {
          const combinedBrand = guessBrand(entry.primary);
          return (
            <CombinedResultItem
              key={`combined-${entry.primary.product_id}-${index}`}
              primary={entry.primary}
              secondary={entry.secondary}
              sentiment={sentimentData[combinedBrand]}
              sentimentBrand={combinedBrand}
            />
          );
        }
        return toResultItem(entry.item, entry._src, index);
      });
    };

    const rawSingleResults = src === 'amazon' ? displayedResults.amazon : displayedResults.walmart;
    const seenIds = new Set();
    const singleTabResults = rawSingleResults.filter(i => {
      if (!i.product_id || seenIds.has(i.product_id)) return false;
      seenIds.add(i.product_id);
      return true;
    });

    return (
      <div className="results-scroll">
        {isLoading ? (
          <div>{[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}</div>
        ) : errorMessage ? (
          <div className={`error-box ${src}-error`}>
            <h3>{src.charAt(0).toUpperCase() + src.slice(1)} Results Unavailable</h3>
            <p>{errorMessage}</p>
            <p>We're working on resolving this issue. In the meantime, you can still view other results.</p>
          </div>
        ) : isAllTab ? (
          renderAllTab()
        ) : singleTabResults.length === 0 ? (
          <p className="no-results">No results found.</p>
        ) : (
          singleTabResults.map((item, index) => toResultItem(item, src, index))
        )}
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
      <Head>
        <title>{`${query || searchTerm || 'Search'} | Curious Trio`}</title>
        <meta name="description" content={`Search results for ${query || searchTerm || 'products'} on Curious Trio`} />
      </Head>
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
              style={{fontSize: '16px'}}
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
        {error.general && <p className="error">{error.general}</p>}
        {query && (
          <div className="results-tabs-container">
            <div className="results-tab-bar">
              {source === 'all' && (
                <button
                  className={`results-tab${activeTab === 'all' ? ' active all-tab' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  All
                  {!loading.amazon && !loading.walmart && (
                    <span className="tab-count">{displayedResults.amazon.length + displayedResults.walmart.length}</span>
                  )}
                  {(loading.amazon || loading.walmart) && <span className="tab-loading" />}
                </button>
              )}
              {(source === 'all' || source === 'amazon') && (
                <button
                  className={`results-tab${activeTab === 'amazon' ? ' active amazon-tab' : ''}`}
                  onClick={() => setActiveTab('amazon')}
                >
                  <span className="column-source-dot amazon" />
                  Amazon
                  {!loading.amazon && (
                    <span className="tab-count">{displayedResults.amazon.length}</span>
                  )}
                  {loading.amazon && <span className="tab-loading" />}
                </button>
              )}
              {(source === 'all' || source === 'walmart') && (
                <button
                  className={`results-tab${activeTab === 'walmart' ? ' active walmart-tab' : ''}`}
                  onClick={() => setActiveTab('walmart')}
                >
                  <span className="column-source-dot walmart" />
                  Walmart
                  {!loading.walmart && (
                    <span className="tab-count">{displayedResults.walmart.length}</span>
                  )}
                  {loading.walmart && <span className="tab-loading" />}
                </button>
              )}
              <span className="affiliate-note">✦ no sponsored results · affiliate links</span>
            </div>
            {renderTabContent(activeTab)}
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
      {isListOpen && (
        <Cart
          items={list.items}
          onClose={handleListToggle}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromList}
        />
      )}
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query, sort_by, source, page } = context.query;
  
  return {
    props: {
      initialQuery: query || null,
      initialSortBy: sort_by || '',
      initialSource: source || 'all',
      initialPage: parseInt(page || '1'),
    },
  };
}

export default SearchPage;