import React, { useEffect, useState, useCallback } from 'react';
import { IconArrowR, IconArrowL } from '../../Utilities/Icons';
import { Coin } from '../../Utilities/types-general';
import CoinsAll from './CoinsAll';
import Pagination from '../UI/Pagination';
import classes from './DashboardDesk.module.scss';

function DashBoardDesk<T>(props: T) {
  const [coins, setCoins] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const searchingHandler = () => {
    setIsSearching(true);
  };
  
  const getCoinsHandler = useCallback(async function () {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.coingecko.com/api/v3/coins');

      if (!response.ok) {
        throw new Error('Something went wrong..');
      }
      const data = await response.json();

      const dataRestructured: Coin[] = data.map((item: any) => {
        let coin;
        return (coin = {
          id: item.id,
          image: item.image.large,
          name: item.name,
          price: item.market_data.current_price.usd,
          priceChangePercentageWeekly:
            item.market_data.price_change_percentage_7d,
        });
      });
      console.log(dataRestructured);
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
            {!isLoading && !isSearching && (
              <CoinsAll currentCoins={currentCoins} />
            )}
            {isLoading && !isSearching && (
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
            currentPage={currentPage}
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
