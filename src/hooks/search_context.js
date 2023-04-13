import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

// Provider
export function SearchContextProvider({ children }) {
  const [searchResult, setSearchResult] = useState({ text: "", result: [] });

  const value = { searchResult, setSearchResult };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

// Hook
export const useSearchContext = () => {
  return useContext(SearchContext);
};
