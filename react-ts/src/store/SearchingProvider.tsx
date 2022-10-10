import React, { useState } from 'react';
import { Children, SearchCtx } from '../Utilities/types-general';

import SearchContext from './search-context';

const SearchingProvider = function <T>(props: T & Children) {
  const onSearch = function (): void {};

  const searchCtx: SearchCtx = {
    coins: [],
    isSearching: false,
    searchHandler: onSearch,
  };
  return (
    <SearchContext.Provider value={searchCtx}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchingProvider;
