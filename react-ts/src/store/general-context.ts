import React, { createContext } from 'react';
import { Coin } from '../Utilities/types-general';
import { generalCtxType } from '../Utilities/types-general';

const generalCtx = createContext<generalCtxType>({
  coins: [
    {
      id: '',
      image: '',
      name: '',
      price: 0,
      priceChangePercentageWeekly: 0,
      price14Days: 0,
      price30Days: 0,
      price60Days: 0,
      high24h: 0,
      total: 0,
      time: 0,
    },
  ],
  filteredCoins: [
    {
      id: '',
      image: '',
      name: '',
      price: 0,
      priceChangePercentageWeekly: 0,
      price14Days: 0,
      price30Days: 0,
      price60Days: 0,
      high24h: 0,
      total: 0,
      time: 0,
    },
  ],
  favCoins: [],
  isSearching: false,
  isLoading: false,
  statsBtnClicked: false,
  setStatsBtnHandler: () => {},
  setCoinsHandler: () => {},
  setIsLoadingHandler: () => {},
  setFavCoins: (val: Coin[]) => {},
  setSearchingHandler: () => {},
  filteredCoinsChangeHandler: () => {},
  coinsChangeHandler: () => {},
});

export default generalCtx;
