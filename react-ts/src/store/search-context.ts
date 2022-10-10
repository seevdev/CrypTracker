import React, { createContext, useState } from 'react';




const SearchContext = createContext({
  isSearching: false,
  searchHandler() {},
});



export default SearchContext;