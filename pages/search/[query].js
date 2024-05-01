import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/header';
import Footer from '../../components/footer';

function SearchPage() {
    const router = useRouter();
    const { query } = router.query;
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchAttempted, setSearchAttempted] = useState(false);

    useEffect(() => {
        if (query) {
            setSearchTerm(decodeURIComponent(query));
            fetchResults(decodeURIComponent(query));
        }
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/search/${encodeURIComponent(searchTerm)}`);
        } else {
            setError('Please enter a valid search term');
        }
    };

    const fetchResults = async (searchQuery) => {
        setLoading(true);
        setSearchAttempted(true);
        try {
            const response = await fetch(`/api/search`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ searchTerm: searchQuery })
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Something went wrong');
            if (data.search_results.length === 0) {
                setError('No results found');
                setResults([]);
            } else {
                setResults(data.search_results);
                setError('');
            }
        } catch (err) {
            setError(err.message || 'Failed to fetch results');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
          <Header />  {/* This includes the Header at the top of the page */}
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
              {loading && <p>searching!</p>}
              {error && <p>Error: {error}</p>}
              {results.length > 0 ? (
                results.map((item) => (
                  <div key={item.asin} className="result-item">
                    <div className="image"><img src={item.image} alt={item.title} /></div>
                    <div className="brand"><p>Brand: {item.brand?.slice(0, 40) ?? 'Not Found'}{item.brand?.length > 40 ? '...' : ''}</p></div>
                    <div className="title">
                      <p
                        title={item.title}
                        className={`${item.title?.length > 80 ? 'tooltip' : ''}`}
                      >{item.title?.slice(0, 80)}{item.title?.length > 80 ? '...' : ''}</p>
                    </div>
                    <div className="rating"><p>Rating: {item.rating} ({item.ratings_total} reviews)</p></div>
                    <div className="price"><p>Price: {item.price?.raw ?? 'Not Found'}</p></div>
                    <div className="link"><a href={item.link} target="_blank" rel="noreferrer">Amazon link</a></div>
                  </div>
                ))
              ) : (
                searchAttempted && !loading && <p>No results found. Try another search.</p>
              )}
            </div>
            <Footer />
          </div>
        </>
      );
    }

export default SearchPage;
