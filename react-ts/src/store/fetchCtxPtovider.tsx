import React, { useContext, useCallback, useState, useEffect } from 'react';

import { Coin, Data, Children } from '../Models/models';
import fetchCtx from './fetch-context';
import generalCtx from './general-context';

const FetchCtxtProvider = (props: Children): JSX.Element => {
  // Fix updateCoin type later
  const [updatedCoin, setUpdatedCoin] = useState<Coin>({
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
  });
  const [timeDiffGreater, setTimeDiffGreater] = useState(false);
  const [topCoins, setTopCoins] = useState<Coin[]>([]);

  const { coins, setIsLoadingHandler, setCoinsHandler } =
    useContext(generalCtx);

  const API_URL = 'https://api.coingecko.com/api/v3/coins';

  const setTimeDiffGreaterHandler = (val: boolean) => {
    setTimeDiffGreater(val);
  };

  const dataFormatter = function (
    data: Data.RootObject | Data.RootObject[]
  ): Coin[] {
    if (data instanceof Array) {
      return data.map((item: Data.RootObject): Coin => {
        return {
          id: item.id,
          image: item.image.large,
          name: item.name,
          price: item.market_data.current_price.usd,
          priceChange7dPercent: item.market_data.price_change_percentage_7d,

          price30Days: item.market_data.price_change_percentage_30d,
          price60Days: item.market_data.price_change_percentage_60d,
          high24h: item.market_data.high_24h.usd,
          priceChange200d:
            item.market_data.price_change_percentage_200d_in_currency.usd,
          price14Days:
            item.market_data.price_change_percentage_14d_in_currency.usd,

          priceChange7d:
            item.market_data.price_change_percentage_7d_in_currency.usd,
          priceChange1y:
            item.market_data.price_change_percentage_1y_in_currency.usd,
          priceChange1h:
            item.market_data.price_change_percentage_1h_in_currency.usd,
          symbol: item.symbol,
          total: item.market_data.total_volume.usd,
          time: new Date().getTime(),
        };
      });
    } else {
      return [
        {
          id: data.id,
          image: data.image.large,
          name: data.name,
          price: data.market_data.current_price.usd,
          priceChange7dPercent: data.market_data.price_change_percentage_7d,

          price30Days: data.market_data.price_change_percentage_30d,
          price60Days: data.market_data.price_change_percentage_60d,
          high24h: data.market_data.high_24h.usd,
          priceChange200d:
            data.market_data.price_change_percentage_200d_in_currency.usd,
          price14Days:
            data.market_data.price_change_percentage_14d_in_currency.usd,

          priceChange7d:
            data.market_data.price_change_percentage_7d_in_currency.usd,
          priceChange1y:
            data.market_data.price_change_percentage_1y_in_currency.usd,
          priceChange1h:
            data.market_data.price_change_percentage_1h_in_currency.usd,
          symbol: data.symbol,
          total: data.market_data.total_volume.usd,
          time: new Date().getTime(),
        },
      ];
    }
  };

  // const error = (): Error => {
  //   return new Error('Something went wrong');
  // };

  const setCoins = (data: Coin[]) => {
    setCoinsHandler(data);
    window.localStorage.setItem('coins', JSON.stringify(data));
  };

  const fetchCoins = useCallback(
    async (url: string) => {
      let response = await fetch(url);
      const data = await response.json();
      return dataFormatter(data);
    },
    [coins]
  );

  const topCoinsSetter = (res: Coin[], arr: Coin[]) => {
    let coinsAll = [...res];
    let priceArr = coinsAll.map((coin) => coin.price);

    for (let i = 0; arr.length < 3; i++) {
      let maxPrice = Math.max(...priceArr);
      let [topCoin] = coinsAll.filter((coin) => coin.price === maxPrice);
      arr.push(topCoin);
      coinsAll = [...coinsAll.filter((coin) => coin !== topCoin)];
      priceArr = [...priceArr.filter((price) => price !== topCoin.price)];
    }
  };

  const updateAllCoins = () => {
    setIsLoadingHandler(true);
    fetchCoins(API_URL).then((res) => {
      setCoins(res);

      let topArr: Coin[] = [];
      topCoinsSetter(res, topArr);

      setIsLoadingHandler(false);

      setTopCoins(topArr);
    });
  };

  const updateCoin = (id: string = '') => {
    fetchCoins(`${API_URL}/${id}`).then((res: Coin[]) => {
      const [coin] = res;
      setUpdatedCoin(coin);
    });
  };

  const contextValue = {
    updateAllCoins: updateAllCoins,
    updateCoin: updateCoin,
    setTimeDiffGreaterHandler: setTimeDiffGreaterHandler,
    updatedCoin: updatedCoin,
    timeDiffGreater: timeDiffGreater,
    topCoins: topCoins,
  };
  return (
    <fetchCtx.Provider value={contextValue}>{props.children}</fetchCtx.Provider>
  );
};

export default FetchCtxtProvider;
