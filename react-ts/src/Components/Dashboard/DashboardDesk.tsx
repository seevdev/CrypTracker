import React, { useEffect, useState, useCallback } from 'react';
import { IconArrowR, IconArrowL } from '../../Utilities/Icons';
import Pagination from '../UI/Pagination';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);

  const getCoinsHandler = useCallback(async function () {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.coingecko.com/api/v3/coins');

      if (!response.ok) {
        throw new Error('Something went wrong..');
      }
      const data = await response.json();

      const dataRestructured: Coin[] = data.map((coin: any) => {
        let newCoin;
        return (newCoin = {
          id: coin.id,
          image: coin.image.large,
          name: coin.name,
          price: coin.market_data.current_price.usd,
          priceChangePercentageWeekly:
            coin.market_data.price_change_percentage_7d,
        });
      });
      setCoins(dataRestructured);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    getCoinsHandler();
  }, [getCoinsHandler]);

  const paginateHandler = (n: number) => {
    setCurrentPage(n);
  };
  // Get currrent coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div className={classes['dashboard-container']}>
      <h2>Dashboard</h2>
      <div className={classes.container}>
        <div className={classes['dashboard-padination']}>
          <div className={classes['dashboard-arrows-cont']}>
            <div
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage((prevPage) => prevPage - 1);
                }
              }}
            >
              {IconArrowL}
            </div>
            {!isLoading && (
              <div className={classes['dashboard-desk']}>
                {currentCoins.map((coin) => {
                  return (
                    <DashBoardItem
                      id={coin.id}
                      name={coin.name}
                      price={coin.price}
                      priceChangePercentageWeekly={
                        coin.priceChangePercentageWeekly
                      }
                      img={coin.image}
                    />
                  );
                })}
              </div>
            )}
            {isLoading && (
              <p className={classes['dashboard-desk']}>Loading..</p>
            )}
            <div
              onClick={() => {
                if (currentPage < Math.ceil(coins.length / coinsPerPage)) {
                  setCurrentPage((prevPage) => prevPage + 1);
                }
              }}
            >
              {IconArrowR}
            </div>
          </div>
          <Pagination
            elementsPerPage={coinsPerPage}
            totalElements={coins.length}
            paginate={paginateHandler}
          />
        </div>
        <div className={classes.graph}></div>
      </div>
    </div>
  );
}

export default DashBoardDesk;
