import React from 'react';

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
    high24h: 0,
    total: 0,
    time: 0,
  },
  timeDiffGreater: false,
  updateAllCoins: () => {},
  updateCoin: (id: string) => {},
  setTimeDiffGreaterHandler: (val: boolean) => {},
  topCoins: [
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
});

export default fetchCtx;
