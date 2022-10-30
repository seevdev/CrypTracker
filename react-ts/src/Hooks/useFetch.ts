import React, { useCallback, useContext, useEffect } from 'react';
import generalCtx from '../store/general-context';


const useFetch = (url: string, id: string = '', statsBtnClicked = false) => {
  
  const { setSearchingHandler, setCoinsHandler, setIsLoadingHandler } =
    useContext(generalCtx);

  const dataFormatter = (data: any) => {
    let coinData = data;

    if (data instanceof Array) {
      coinData = data.map((item: any) => {
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
    } else if (
      typeof data === 'object' &&
      data !== null &&
      data instanceof Array === false
    ) {
      coinData = {
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
    console.log(coinData);
    return coinData;
  };

  const fetchCoins = useCallback(async () => {
    try {
      setIsLoadingHandler(true);

      let response = await fetch(url);

      if (!statsBtnClicked) {
        response = await fetch(`${url}/${id}`);
      }

      if (!response.ok) {
        throw new Error('Something went wrong..');
      }
      const data = await response.json();
      const coinData = dataFormatter(data);

      //   const coinData: Coin[] = data.map((item: any) => {
      //     return {
      //       id: item.id,
      //       image: item.image.large,
      //       name: item.name,
      //       price: item.market_data.current_price.usd,
      //       priceChangePercentageWeekly:
      //         item.market_data.price_change_percentage_7d,
      //       price14Days: item.market_data.price_change_percentage_24h,
      //       price30Days: item.market_data.price_change_percentage_30d,
      //       price60Days: item.market_data.price_change_percentage_60d,
      //       total: item.market_data.total_volume.usd,
      //     };
      //   });

      !statsBtnClicked ? setCoinsHandler(coinData) : console.log('Coinnn');

      setIsLoadingHandler(false);
    } catch (e) {
      console.log(e.message);
    }
  }, [useFetch]);

  useEffect(() => {
    fetchCoins();
  }, [useFetch]);
};

export default useFetch;
