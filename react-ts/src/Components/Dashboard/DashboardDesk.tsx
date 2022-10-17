import React, { useEffect, useState, useCallback, useContext } from 'react';
import { IconArrowR, IconArrowL } from '../../Utilities/Icons';
import { Coin } from '../../Utilities/types-general';
import SearchContext from '../../store/general-context';
import CoinsAll from './CoinsAll';
import Pagination from '../UI/Pagination';
import './DashboardDesk.scss';
import generalCtx from '../../store/general-context';


function DashBoardDesk<T>(props: T) {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);
  const [display, setDisplay] = useState<boolean>(false);

  const { coinsChangeHandler, isSearching, filteredCoins } =
    useContext(generalCtx);

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
      setCoins(dataRestructured);
      setIsLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    getCoinsHandler();
  }, [getCoinsHandler]);

  useEffect(() => {
    coinsChangeHandler(coins);
  }, [coins]);

  const paginateHandler = (n: number) => {
    setCurrentPage(n);
  };
  // Get currrent coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  let currentCoins = isSearching
    ? filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin)
    : coins.slice(indexOfFirstCoin, indexOfLastCoin);

  useEffect(() => {
    if (
      (!isSearching && coins.length > coinsPerPage) ||
      (isSearching && filteredCoins.length > coinsPerPage)
    ) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [isSearching, filteredCoins, coins]);

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <div className='container'>
        <div className='dashboard-padination'>
          <div className='dashboard-arrows-cont'>
            {display && (
              <div
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage((prevPage) => prevPage - 1);
                  }
                }}
              >
                {IconArrowL}
              </div>
            )}
            {!isLoading && <CoinsAll currentCoins={currentCoins} />}
            {isLoading && <p className='dashboard-desk'>Loading..</p>}
            {display && (
              <div
                onClick={() => {
                  if (currentPage < Math.ceil(coins.length / coinsPerPage)) {
                    setCurrentPage((prevPage) => prevPage + 1);
                  }
                }}
              >
                {IconArrowR}
              </div>
            )}
          </div>
          {display && (
            <Pagination
              currentPage={currentPage}
              elementsPerPage={coinsPerPage}
              totalElements={!isSearching ? coins.length : filteredCoins.length}
              paginate={paginateHandler}
            />
          )}
        </div>
        <div className='graph'></div>
      </div>
    </div>
  );
}

export default DashBoardDesk;
