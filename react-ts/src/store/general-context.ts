import React, { createContext } from 'react';
import { Coin } from '../Models/coinModel';
import { generalContextModel } from '../Models/generalContextModel';

const generalCtx = createContext<generalContextModel>({
  coins: [],
  filteredCoins: [],
  favCoins: [],
  topCoins: [],
  isSearching: false,
  isLoading: false,
  statsBtnClicked: false,
  statsMenuOpen: false,
  updatedCoin: undefined,
  timeDifferenceGreater: false,
  setCoins: (val: Coin[]) => {},
  setFavCoins: (val: Coin[]) => {},
  setTopCoins: (val: Coin[]) => {},
  setStatsBtnClicked: (val: boolean) => {},
  setIsLoading: (val: boolean) => {},  
  setFilteredCoins: (val: Coin[]) => {},
  setStatsMenuOpen: (val: boolean) => {},
  setIsSearching: (val: boolean) => {},
  updateCoins: () => {},
});

export default generalCtx;
