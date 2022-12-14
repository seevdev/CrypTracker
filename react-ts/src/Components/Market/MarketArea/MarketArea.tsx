import { useEffect, useState, useContext } from 'react';
import generalCtx from '../../../store/general-context';
import { IconArrowR, IconArrowL } from '../../../Utilities/Icons/Icons';
import { Coin } from '../../../Models/coinModel';
import CoinsAll from '../../Coins/CoinsAll';
import Pagination from '../../UI/Pagination/Pagination';

import CoinsTop from '../../TopCoins/TopCoins';

import classes from './MarketArea.module.scss';

const MarketArea = function () {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);
  const [display, setDisplay] = useState<boolean>(false);
  const [currentCoins, setCurrentCoins] = useState<Coin[]>([]);
  const [data, setData] = useState<any>([]);
  const [label, setLabel] = useState('');

  const {
    isSearching,
    filteredCoins,
    isLoading,
    coins,
    topCoins,
    updateCoins,
  } = useContext(generalCtx);

  useEffect(() => {
    updateCoins();
  }, []);

  useEffect(() => {
    if (topCoins.length > 0) {
      const randomTopCoin = topCoins[Math.floor(Math.random() * 3)];
      const newData = [
        randomTopCoin.priceChange1y.toFixed(2),
        randomTopCoin.priceChange200d.toFixed(2),
        randomTopCoin.price60Days.toFixed(2),
        randomTopCoin.price30Days.toFixed(2),
        randomTopCoin.price14Days.toFixed(2),
        randomTopCoin.priceChange7d.toFixed(2),
        randomTopCoin.priceChange1h.toFixed(2),
        0.22,
      ];

      setLabel(randomTopCoin.name);
      setData(newData);
    }
  }, [coins]);

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
    <div className={classes['market-area']}>
      {isLoading && (
        <div className={classes.loading}>
          <img src='https://media.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif' />
          <span>Loading</span>
        </div>
      )}
      {!isLoading && (
        <div className={classes['items-container']}>
          <div
            className={`${classes['column-two']} ${classes['row-span-2']} ${classes['coins-container']}`}
          >
            {!isLoading && (
              <div>
                <span className='box-title'>Coins</span>
                <CoinsAll currentCoins={currentCoins} />
              </div>
            )}
          </div>

          {display && (
            <div
              className={`${classes['column-one']} ${classes['row-span-2']} ${classes['arrow-box-left']}`}
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage((prevPage) => prevPage - 1);
                }
              }}
            >
              {IconArrowL}
            </div>
          )}

          {display && (
            <div
              className={`${classes['column-three']} ${classes['row-span-2']} ${classes['arrow-box-right']}`}
              onClick={() => {
                if (currentPage < Math.ceil(coins.length / coinsPerPage)) {
                  setCurrentPage((prevPage) => prevPage + 1);
                }
              }}
            >
              {IconArrowR}
            </div>
          )}

          {display && (
            <div
              className={`${classes['column-two']} ${classes['row-span-3']} ${classes['pagination-box']}`}
            >
              <Pagination
                currentPage={currentPage}
                elementsPerPage={coinsPerPage}
                totalElements={
                  !isSearching ? coins.length : filteredCoins.length
                }
                paginate={paginateHandler}
              />
            </div>
          )}

          <div
            className={`${classes['column-four']} ${classes['row-span-2']} ${classes['stats-container']}`}
          >
            <div
              className={`${classes['column-four']} ${classes['row-two']} ${classes['coins-top']}`}
            >
              <div>
                <span className='box-title'>Top Coins</span>
                <CoinsTop topCoins={topCoins} />
              </div>
            </div>
            {/* <h3>Annual Change</h3> */}
            <div className={classes.chart}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketArea;
