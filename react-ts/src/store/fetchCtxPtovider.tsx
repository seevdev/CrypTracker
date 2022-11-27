// import React, { useContext, useCallback, useState, useEffect } from 'react';
// import { coinsServices } from '../services/coinsService';
// import { Coin, Data, Children } from '../Models/models';
// import fetchCtx from './fetch-context';
// import generalCtx from './general-context';
// import { appConfig } from '../config/appConfig';

// const FetchCtxtProvider = (props: Children): JSX.Element => {
  // Fix updateCoin type later


//   const [updatedCoin, setUpdatedCoin] = useState<Coin>({
//     id: '',
//     image: '',
//     name: '',
//     price: 0,
//     priceChange7dPercent: 0,
//     price14Days: 0,
//     price30Days: 0,
//     price60Days: 0,
//     high24h: 0,
//     total: 0,
//     time: 0,
//     priceChange1h: 0,
//     priceChange1y: 0,
//     priceChange7d: 0,
//     priceChange200d: 0,
//     symbol: '',
//   });
//   const [timeDiffGreater, setTimeDiffGreater] = useState(false);
//   const [topCoins, setTopCoins] = useState<Coin[]>([]);

//   const { coins, setIsLoadingHandler, setCoinsHandler } =
//     useContext(generalCtx);

//   const setTimeDiffGreaterHandler = (val: boolean) => {
//     setTimeDiffGreater(val);
//   };

//   // const setCoins = (data: Coin[]) => {
//   //   setCoinsHandler(data);
//   //   window.localStorage.setItem('coins', JSON.stringify(data));
//   // };

//   // const topCoinsSetter = (res: Coin[], arr: Coin[]) => {
//   //   let coinsAll = [...res];
//   //   let priceArr = coinsAll.map((coin) => coin.price);

//   //   for (let i = 0; arr.length < 3; i++) {
//   //     let maxPrice = Math.max(...priceArr);
//   //     let [topCoin] = coinsAll.filter((coin) => coin.price === maxPrice);
//   //     arr.push(topCoin);
//   //     coinsAll = [...coinsAll.filter((coin) => coin !== topCoin)];
//   //     priceArr = [...priceArr.filter((price) => price !== topCoin.price)];
//   //   }
//   // };

//   // const updateAllCoins = () => {
//   //   setIsLoadingHandler(true);
//   //   coinsServices.fetchCoins(appConfig.COINS_URL).then((res) => {
//   //     setCoins(res);

//   //     let topArr: Coin[] = [];
//   //     topCoinsSetter(res, topArr);

//   //     setIsLoadingHandler(false);

//   //     setTopCoins(topArr);
//   //   });
//   // };

//   // const updateCoin = (id: string = '') => {
//   //   coinsServices.fetchCoins(appConfig.COINS_URL + id).then((res: Coin[]) => {
//   //     const [coin] = res;
//   //     setUpdatedCoin(coin);
//   //   });
//   // };

//   const contextValue = {
//     updateAllCoins: updateAllCoins,
//     updateCoin: updateCoin,
//     setTimeDiffGreaterHandler: setTimeDiffGreaterHandler,
//     updatedCoin: updatedCoin,
//     timeDiffGreater: timeDiffGreater,
//     topCoins: topCoins,
//   };
//   return (
//     <fetchCtx.Provider value={contextValue}>{props.children}</fetchCtx.Provider>
//   );
// };

// export default FetchCtxtProvider;
