import React, { createContext, useState } from 'react';
import { SearchCtx } from '../Utilities/types-general';

const SearchContext = createContext<SearchCtx>({
  coins: [
    { id: 0, image: '', name: '', price: 0, priceChangePercentageWeekly: 0 },
  ],
  filteredCoins: [
    { id: 0, image: '', name: '', price: 0, priceChangePercentageWeekly: 0 },
  ],
  isSearching: false,
  searchHandler: () => {},
  changeSearching: () => {},
  filteredCoinsChangeHandler: () => {},
  coinsChangeHandler: () => {},
});

export default SearchContext;
