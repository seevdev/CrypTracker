import React from 'react';
import { Coin } from '../Utilities/types-general';

const fetchCtx = React.createContext({
  updatedCoin: {
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
  timeDiffGreater: false,
  updateAllCoins: () => {},
  updateCoin: (id: string) => {},
  setTimeDiffGreaterHandler: (val: boolean) => {},
});

export default fetchCtx;
