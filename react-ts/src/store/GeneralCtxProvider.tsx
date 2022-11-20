import React, { useState, useEffect } from 'react';
import { Children, Coin, generalCtxType } from '../Models/models';

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

  useEffect(() => {
    window.localStorage.setItem('favCoins', JSON.stringify(favCoins));
  }, [favCoins]);

  const searchCtx: generalCtxType = {
    coins: coins,
    filteredCoins: filteredCoins,
    isSearching: isSearching,
    favCoins: favCoins,
    isLoading: isLoading,
    statsBtnClicked: statsBtnClicked,
    statsMenuOpen: statsMenuOpen,
    setStatsBtnHandler: setStatsBtnClicked,
    setIsLoadingHandler: setIsLoading,
    setCoinsHandler: setCoins,
    setFavCoins: setFavCoins,
    setSearchingHandler: setSearchingHandler,
    filteredCoinsChangeHandler: setFilteredCoins,
    coinsChangeHandler: setCoins,
    setStatsMenuOpen: setStatsMenuOpen,
  };
  return (
    <generalCtx.Provider value={searchCtx}>
      {props.children}
    </generalCtx.Provider>
  );
};

export default GeneralCtxProvider;
