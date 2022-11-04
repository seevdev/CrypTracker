import React, { useState, useCallback, useEffect } from 'react';
import { Children, Coin, generalCtxType } from '../Utilities/types-general';

import generalCtx from './general-context';

const GeneralCtxProvider = (props: Children): JSX.Element => {
  let favCoinsCashed =
    JSON.parse(window.localStorage.getItem('favCoins')!) || [];

  const [favCoins, setFavCoins] = useState<Coin[]>(favCoinsCashed);
  const [isSearching, setIsSearching] = useState(false);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statsBtnClicked, setStatsBtnClicked] = useState<boolean>(false);
  const [statsMenuOpen, setStatsMenuOpen] = useState(false);

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

  useEffect(() => {
    window.localStorage.setItem('favCoins', JSON.stringify(favCoins));
  }, [favCoins]);

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
    statsMenuOpen:statsMenuOpen,
    setStatsBtnHandler: setStatsBtnHandler,
    setIsLoadingHandler: setIsLoadingHandler,
    setCoinsHandler: setCoinsHandler,
    setFavCoins: setFavHandler,
    setSearchingHandler: setSearchingHandler,
    filteredCoinsChangeHandler: setFilteredCoins,
    coinsChangeHandler: setCoins,
    setStatsMenuOpen:setStatsMenuOpen,
  };
  return (
    <generalCtx.Provider value={searchCtx}>
      {props.children}
    </generalCtx.Provider>
  );
};

export default GeneralCtxProvider;
