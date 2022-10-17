import React, { useState } from 'react';
import { Children, Coin, generalCtxType } from '../Utilities/types-general';

import generalCtx from './general-context';

const GeneralCtxProvider = function <T>(props: T & Children) {
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
  };

  const filteredCoinsChangeHandler = function (val: Coin[]): void {
    setFilteredCoins(val);
  };

  const onSearch = function (): void {};

  const searchCtx: generalCtxType = {
    coins: coins,
    filteredCoins: filteredCoins,
    isSearching: isSearching,
    searchHandler: onSearch,
    changeSearching: changeSearching,
    filteredCoinsChangeHandler: filteredCoinsChangeHandler,
    coinsChangeHandler: coinsChangeHandler,
  };
  return (
    <generalCtx.Provider value={searchCtx}>
      {props.children}
    </generalCtx.Provider>
  );
};

export default GeneralCtxProvider;
