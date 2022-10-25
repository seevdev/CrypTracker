import React, { useState } from 'react';
import { Children, Coin, generalCtxType } from '../Utilities/types-general';

import generalCtx from './general-context';

let favCoinsCash =
  JSON.parse(window.localStorage.getItem('favCoins')!) || [];

const GeneralCtxProvider = function <T>(props: T & Children) {
  const [isSearching, setIsSearching] = useState(false);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
  const [favCoins, setFavCoins] = useState<Coin[]>(favCoinsCash);

  const changeSearching = (setTrue: boolean) => {
    if (setTrue) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const setFavHandler = (val: Coin) => {
    setFavCoins((prev) => {
      const prevAndCurrentCoins = [...prev, val];
      const uniqueFavCoins = new Set(prevAndCurrentCoins);
      return [...uniqueFavCoins];
    });
  };

  const searchCtx: generalCtxType = {
    coins: coins,
    filteredCoins: filteredCoins,
    isSearching: isSearching,
    favCoins: favCoins,   
    setFavCoins: setFavHandler,
    changeSearching: changeSearching,
    filteredCoinsChangeHandler: setFilteredCoins,
    coinsChangeHandler: setCoins,
  };
  return (
    <generalCtx.Provider value={searchCtx}>
      {props.children}
    </generalCtx.Provider>
  );
};

export default GeneralCtxProvider;