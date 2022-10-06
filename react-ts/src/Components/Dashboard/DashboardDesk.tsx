import React, { useEffect, useState, useCallback } from 'react';
import { IconArrowR, IconArrowL } from '../../Utilities/Icons';
import classes from './DashboardDesk.module.scss';
import DashBoardItem from './DashboardItem';

type Coin = {
  id: number | string;
  image: string;
  name: string;
  price: number;
  priceChangePercentageWeekly: number;
};

type Children = {
  children?: React.ReactNode;
};

function DashBoardDesk<T>(props: T & Children) {
  
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);

  const getCoinsHandler = useCallback(async function () {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins');
      console.log(response);
      if (!response.ok) {
        throw new Error('Something went wrong..');
      }
      const data = await response.json();
      console.log(data);

      const dataRestructured: Coin[] = data.map((coin: any) => {
        let newCoin;
        return (newCoin = {
          id: coin.id,
          image: coin.image.thumb,
          name: coin.name,
          price: coin.market_data.current_price.usd,
          priceChangePercentageWeekly:
            coin.market_data.price_change_percentage_7d,
        });
      });
      setCoins(dataRestructured);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    getCoinsHandler();
  }, [getCoinsHandler]);

  // Gget currrent coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div className={classes['dashboard-container']}>
      <h2>Dashboard</h2>
      <div className={classes.container}>
        <div className={classes['dashboard-arrows-cont']}>
          {IconArrowL}
          <div className={classes['dashboard-desk']}>
            {coins.map((coin) => {
              return (
                <DashBoardItem
                  id={coin.id}
                  name={coin.name}
                  price={coin.price}
                  priceChangePercentageWeekly={coin.priceChangePercentageWeekly}
                  img={coin.image}
                />
              );
            })}
          </div>
          {IconArrowR}
        </div>
        <div className={classes.graph}></div>
      </div>
    </div>
  );
}

export default DashBoardDesk;
