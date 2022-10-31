import React, { createContext } from 'react';
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
  setFavCoins: () => {},
  setSearchingHandler: () => {},
  filteredCoinsChangeHandler: () => {},
  coinsChangeHandler: () => {},
});

export default generalCtx;
