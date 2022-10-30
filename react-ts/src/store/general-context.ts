import React, { createContext } from 'react';
import { generalCtxType } from '../Utilities/types-general';

const generalCtx = createContext<generalCtxType>({
  coins: [
    { id: 0, image: '', name: '', price: 0, priceChangePercentageWeekly: 0 },
  ],
  filteredCoins: [
    { id: 0, image: '', name: '', price: 0, priceChangePercentageWeekly: 0 },
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
