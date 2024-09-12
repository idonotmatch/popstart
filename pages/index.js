import React, { useState } from 'react';
import Head from 'next/head';  // Add this import
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';

function HomePage() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [source, setSource] = useState('all');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm)}?sort_by=${encodeURIComponent(sortBy)}&source=${encodeURIComponent(source)}`);
    } else {
      console.error('Please enter a search term');
    }
  };

  if (isLoading) return <div>searching.</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <Head>
          <title>Curious Trio - Search</title>
          <meta name="description" content="Search for products without paid ads across multiple sources with Curious Trio" />
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
            />
            <button type="submit" className="search-button">go.</button>
          </div>
          <div className="search-modifiers">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
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
              onChange={(e) => setSource(e.target.value)}
              className="modifier-select"
            >
              <option value="all">All Sources</option>
              <option value="amazon">Amazon</option>
              <option value="walmart">Walmart</option>
            </select>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;