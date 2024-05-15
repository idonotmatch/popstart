import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchCache, setSearchCache] = useState({});

  const setSearchResults = (query, results) => {
    setSearchCache((prevCache) => ({
      ...prevCache,
      [query]: results,
    }));
  };

  const getSearchResults = (query) => searchCache[query] || null;

  return (
    <SearchContext.Provider value={{ setSearchResults, getSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
