import React, { useContext, useCallback, useState, useEffect } from 'react';

import { Coin, Data, Children } from '../Utilities/types-general';
import fetchCtx from './fetch-context';
import generalCtx from './general-context';

const FetchCtxtProvider = function <T>(props: T & Children) {
  // Fix updateCoin type later
  const [updatedCoin, setUpdatedCoin] = useState<Coin>({
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
  });
  const [timeDiffGreater, setTimeDiffGreater] = useState(false);

  const { coins, setIsLoadingHandler, setCoinsHandler, statsBtnClicked } =
    useContext(generalCtx);
  useEffect(() => {
    console.log(updatedCoin);
  }, [updatedCoin]);
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
          priceChangePercentageWeekly:
            item.market_data.price_change_percentage_7d,
          price14Days: item.market_data.price_change_percentage_24h,
          price30Days: item.market_data.price_change_percentage_30d,
          price60Days: item.market_data.price_change_percentage_60d,
          total: item.market_data.total_volume.usd,
          time: new Date().getTime(),
        };
      });
    }
    // typeof data === 'object' &&
    // data !== null &&
    // data instanceof Array === false
    else {
      return [
        {
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
          time: new Date().getTime(),
        },
      ];
    }
  };

  const setCoins = (data: any) => {
    setCoinsHandler(data);
    window.localStorage.setItem('coins', JSON.stringify(data));
  };

  const error = (): Error => {
    return new Error('Something went wrong');
  };

  const fetchCoins = useCallback(
    async (url: string) => {
      // setIsLoadingHandler(true);

      let response = await fetch(url);

      const data = await response.json();
      // setIsLoadingHandler(false);
      return dataFormatter(data);
    },
    [coins]
  );

  const updateAllCoins = () => {
    fetchCoins(API_URL).then((res) => setCoins(res));
   
  };

  const updateCoin = (id: string = '') => {
    const coinsCashed: Coin[] = JSON.parse(
      window.localStorage.getItem('coins')!
    );

    const [currentCoin] = [...coins.filter((curr) => curr.id === id)];

    const filteredCoins: Coin[] = coinsCashed.filter(
      (current) => current['id'] !== currentCoin.id
    );

    fetchCoins(`${API_URL}/${id}`).then((res: Coin[]) => {
      // filteredCoins.push(...res);
      console.log(res);
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
  };
  return (
    <fetchCtx.Provider value={contextValue}>{props.children}</fetchCtx.Provider>
  );
};

export default FetchCtxtProvider;
