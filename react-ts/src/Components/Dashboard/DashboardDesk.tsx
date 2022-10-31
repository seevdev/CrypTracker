import React, { useEffect, useState, useCallback, useContext } from 'react';
import { IconArrowR, IconArrowL } from '../../Utilities/Icons';
import { Coin } from '../../Utilities/types-general';
import CoinsAll from './CoinsAll';
import Pagination from '../UI/Pagination';
import generalCtx from '../../store/general-context';
import useFetch from '../../Hooks/useFetch';
import './DashboardDesk.scss';
import fetchCtx from '../../store/fetch-context';

function DashBoardDesk<T>(props: T) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);
  const [display, setDisplay] = useState<boolean>(false);
  const [currentCoins, setCurrentCoins] = useState<Coin[]>([]);
  const { coinsChangeHandler, isSearching, filteredCoins, isLoading, coins } =
    useContext(generalCtx);
  const { updateAllCoins } = useContext(fetchCtx);

  useEffect(() => {
    updateAllCoins();
  }, []);

  const paginateHandler = (n: number) => {
    setCurrentPage(n);
  };

  useEffect(() => {
    const indexOfLastCoin = currentPage * coinsPerPage;
    const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;

    if (!isSearching && coins.length > coinsPerPage) {
      setCurrentCoins([...coins.slice(indexOfFirstCoin, indexOfLastCoin)]);
    } else if (!isSearching && coins.length <= coinsPerPage) {
      setCurrentCoins([...coins]);
    } else if (isSearching && filteredCoins.length > coinsPerPage) {
      setCurrentCoins([
        ...filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin),
      ]);
    } else if (isSearching && filteredCoins.length <= coinsPerPage) {
      setCurrentCoins([...filteredCoins]);
    }
  }, [coins, filteredCoins, isSearching, currentPage]);

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
