import React, { useContext, useCallback } from 'react';

 import { Coin, Data, Children } from '../Utilities/types-general';
import fetchCtx from './fetch-context';
import generalCtx from './general-context';

const fetchCtxtProvider = function <T>(props: T & Children) {
  const { coins, setIsLoadingHandler, setCoinsHandler, statsBtnClicked } =
    useContext(generalCtx);

  const dataFormatter = function (data: Data.RootObject & Coin) {
    if (data instanceof Array) {
      return data.map((item: any) => {
        return {
          id: item.id,
          image: item.image.large,
          name: item.name,
          price: item.market_data.current_price.usd,
          priceChangePercentageWeekly:
            item.market_data.price_change_percentage_7d,
          price14Days: item.market_data.price_change_percentage_24h,
          price30Days: item.market_data.price_change_percentage_30d,
          price60Days: item.market_data.price_change_percentage_60d,
          total: item.market_data.total_volume.usd,
        };
      });
    }
    // typeof data === 'object' &&
    // data !== null &&
    // data instanceof Array === false
    else {
      return {
        id: data.id,
        image: data.image.large,
        name: data.name,
        price: data.market_data.current_price.usd,
        priceChangePercentageWeekly:
          data.market_data.price_change_percentage_7d,
        price14Days: data.market_data.price_change_percentage_24h,
        price30Days: data.market_data.price_change_percentage_30d,
        price60Days: data.market_data.price_change_percentage_60d,
        total: data.market_data.total_volume.usd,
      };
    }
  };

  const setCoins = (data: any) => {
    setCoinsHandler(data);
    window.localStorage.setItem('coins', JSON.parse(data));
  };

  const updateCoin = (coin: Coin, data: Data.RootObject & Coin) => {
    let coins = window.localStorage.getItem('coins');
    if (coins !== null) {
      const coinsCashed: [] = JSON.parse(coins);
      const currentCoin: Coin = dataFormatter(data);

      const filteredCoins = coinsCashed.filter(
        (current) => current['id'] !== currentCoin['id']
      );
      filteredCoins.push(currentCoin);
      setCoinsHandler(filteredCoins);
    }
  };

  const fetchCoins = useCallback(async (url: string, id = null) => {
    try {
      setIsLoadingHandler(true);

      let response = await fetch(url);

      if (statsBtnClicked) {
        response = await fetch(`${url}/${id}`);
      }

      if (!response.ok) {
        throw new Error('Something went wrong..');
      }
      const data = await response.json();
      const coinData = dataFormatter(data);

      setCoinsHandler(coinData);
      setIsLoadingHandler(false);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <fetchCtx.Provider value={{ fetchCoins: fetchCoins }}>
      {props.children}
    </fetchCtx.Provider>
  );
};

export default fetchCtxtProvider;
