import React from 'react';

const fetchCtx = React.createContext({
  updatedCoin: {
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
    priceChange200d:0,
    symbol: '',
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
      priceChange200d:0,
      symbol: ''
    },
  ],
});

export default fetchCtx;
