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
      priceChange7dPercent: 0,
      price14Days: 0,
      price30Days: 0,
      price60Days: 0,
      high24h: 0,
      total: 0,
      time: 0,
      priceChange1h: 0,
      priceChange1y: 0,
      priceChange7d: 0,
      priceChange200d: 0,
      symbol: '',
    },
  ],
  filteredCoins: [
    {
      id: '',
      image: '',
      name: '',
      price: 0,
      priceChange7dPercent: 0,
      price14Days: 0,
      price30Days: 0,
      price60Days: 0,
      high24h: 0,
      total: 0,
      time: 0,
      priceChange1h: 0,
      priceChange1y: 0,
      priceChange7d: 0,
      priceChange200d: 0,
      symbol: '',
    },
  ],
  favCoins: [],
  isSearching: false,
  isLoading: false,
  statsBtnClicked: false,
  statsMenuOpen:false,
  setStatsBtnHandler: () => {},
  setCoinsHandler: () => {},
  setIsLoadingHandler: () => {},
  setFavCoins: (val: Coin[]) => {},
  setSearchingHandler: () => {},
  filteredCoinsChangeHandler: () => {},
  coinsChangeHandler: () => {},
  setStatsMenuOpen:(v)=>{},
});

export default generalCtx;
