import React, { useState, useEffect } from 'react';
import { Children, Coin } from '../Models/coinModel';
import { generalContextModel } from '../Models/generalContextModel';
import { appConfig } from '../config/appConfig';
import { coinsServices } from '../services/coinsService';
import generalCtx from './general-context';

const GeneralContextProvider = (props: Children): JSX.Element => {
  const [favCoins, setFavCoins] = useState<Coin[]>(
    JSON.parse(window.localStorage.getItem('favCoins')!) || []
  );
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statsBtnClicked, setStatsBtnClicked] = useState<boolean>(false);
  const [statsMenuOpen, setStatsMenuOpen] = useState(false);
  const [updatedCoin, setUpdatedCoin] = useState<Coin | undefined>(undefined);
  const [timeDifferenceGreater, setTimeDifferenceGreater] = useState(false);
  const [topCoins, setTopCoins] = useState<Coin[]>([]);

  const updateCoins = () => {
    setIsLoading(true);
    coinsServices.fetchCoins(appConfig.COINS_URL).then((res) => {
      setCoins(res);

      let topArr: Coin[] = [];
      topCoinsSetter(res, topArr);

      setIsLoading(false);

      setTopCoins(topArr);
    });
  };

  const updateCoin = (id: string = '') => {
    coinsServices.fetchCoins(appConfig.COINS_URL + id).then((res: Coin[]) => {
      const [coin] = res;
      setUpdatedCoin(coin);
    });
  };

  const changeCoins = (data: Coin[]) => {
    setCoins(data);
    window.localStorage.setItem('coins', JSON.stringify(data));
  };

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

  useEffect(() => {
    window.localStorage.setItem('favCoins', JSON.stringify(favCoins));
  }, [favCoins]);

  const searchCtx: generalContextModel = {
    coins,
    filteredCoins,
    isSearching,
    favCoins,
    isLoading,
    statsBtnClicked,
    statsMenuOpen,
    updatedCoin,
    timeDifferenceGreater,
    topCoins,
    setTopCoins,
    setStatsBtnClicked,
    setIsLoading,
    setFavCoins,
    setIsSearching,
    setFilteredCoins,
    setCoins: changeCoins,
    setStatsMenuOpen,
  };
  return (
    <generalCtx.Provider value={searchCtx}>
      {props.children}
    </generalCtx.Provider>
  );
};

export default GeneralContextProvider;
