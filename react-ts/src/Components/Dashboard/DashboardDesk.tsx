import React, { useEffect, useState, useCallback, useContext } from 'react';
import { IconArrowR, IconArrowL } from '../../Utilities/Icons';
import { Coin } from '../../Utilities/types-general';
import SearchContext from '../../store/search-context';
import CoinsAll from './CoinsAll';
import Pagination from '../UI/Pagination';
import classes from './DashboardDesk.module.scss';

function DashBoardDesk<T>(props: T) {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);

  const { coinsChangeHandler, isSearching, filteredCoins } =
    useContext(SearchContext);

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
      coinsChangeHandler(coins);
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
  let currentCoins = isSearching
    ? filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin)
    : coins.slice(indexOfFirstCoin, indexOfLastCoin);

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
            {!isLoading && <CoinsAll currentCoins={currentCoins} />}
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
