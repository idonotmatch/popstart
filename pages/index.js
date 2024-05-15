import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAttempted, setSearchAttempted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchAttempted(true);
      router.push(`/search/${encodeURIComponent(searchTerm)}`);
    } else {
      setSearchAttempted(true);
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
        {searchAttempted && !searchTerm.trim() && (
          <p>Please enter a valid search term</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
