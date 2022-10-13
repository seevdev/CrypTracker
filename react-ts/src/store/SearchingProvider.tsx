import React, { useState } from 'react';
import { Children, Coin, SearchCtx } from '../Utilities/types-general';

import SearchContext from './search-context';

const SearchingProvider = function <T>(props: T & Children) {
  const [isSearching, setIsSearching] = useState(false);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);

  const changeSearching = (setTrue: boolean) => {
    if (setTrue) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const coinsChangeHandler = function (val: Coin[]): void {
    setCoins(val);
    console.log(coins);
  };

  const filteredCoinsChangeHandler = function (val: Coin[]): void {
    setFilteredCoins(val);
  };

  const onSearch = function (): void {};

  const searchCtx: SearchCtx = {
    coins: coins,
    filteredCoins: filteredCoins,
    isSearching: isSearching,
    searchHandler: onSearch,
    changeSearching: changeSearching,
    filteredCoinsChangeHandler: filteredCoinsChangeHandler,
    coinsChangeHandler: coinsChangeHandler,
  };
  return (
    <SearchContext.Provider value={searchCtx}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchingProvider;
