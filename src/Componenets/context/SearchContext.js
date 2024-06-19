// src/context/SearchContext.js
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
 const [isLoggedOut, setIsLoggedOut] = useState(false);
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery,isLoggedOut,setIsLoggedOut }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
