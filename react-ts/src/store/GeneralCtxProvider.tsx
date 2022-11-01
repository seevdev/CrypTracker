import React, { useState, useCallback } from 'react';
import { Children, Coin, generalCtxType } from '../Utilities/types-general';

import generalCtx from './general-context';

let favCoinsCash = JSON.parse(window.localStorage.getItem('favCoins')!) || [];

const GeneralCtxProvider = function <T>(props: T & Children) {
  const [isSearching, setIsSearching] = useState(false);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
  const [favCoins, setFavCoins] = useState<Coin[]>(favCoinsCash);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statsBtnClicked, setStatsBtnClicked] = useState<boolean>(false);

  const setSearchingHandler = (setTrue: boolean) => {
    if (setTrue) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const setFavHandler = (val: Coin[]) => {
    setFavCoins(val);
  };

  const setCoinsHandler = (val: Coin[]) => {
    setCoins(val);
  };
  const setIsLoadingHandler = (val: boolean) => {
    setIsLoading(val);
  };

  const setStatsBtnHandler = (val: boolean) => {
    setStatsBtnClicked(val);
  };

  const searchCtx: generalCtxType = {
    coins: coins,
    filteredCoins: filteredCoins,
    isSearching: isSearching,
    favCoins: favCoins,
    isLoading: isLoading,
    statsBtnClicked: statsBtnClicked,
    setStatsBtnHandler: setStatsBtnHandler,
    setIsLoadingHandler: setIsLoadingHandler,
    setCoinsHandler: setCoinsHandler,
    setFavCoins: setFavHandler,
    setSearchingHandler: setSearchingHandler,
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
