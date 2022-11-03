import React, { useEffect, useState, useCallback, useContext } from 'react';
import { IconArrowR, IconArrowL } from '../../Utilities/Icons';
import { Coin } from '../../Utilities/types-general';
import CoinsAll from './CoinsAll';
import Pagination from '../UI/Pagination';
import generalCtx from '../../store/general-context';
import useFetch from '../../Hooks/useFetch';
import './DashboardDesk.scss';
import fetchCtx from '../../store/fetch-context';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

import BubbleChart from '../UI/ChartComponents/BubbleChart';
import CoinTop from './CoinTop/CoinTop';

Chart.register(CategoryScale);

function DashBoardDesk<T>(props: T) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);
  const [display, setDisplay] = useState<boolean>(false);
  const [currentCoins, setCurrentCoins] = useState<Coin[]>([]);

  const { setCoinsHandler, isSearching, filteredCoins, isLoading, coins } =
    useContext(generalCtx);
  const { updateAllCoins, topCoins } = useContext(fetchCtx);

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

  const topCoinsHard = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      price: 20555,
      changePercent: 2.58,
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      price: 20555,
      changePercent: -25.8,
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      price: 20555,
      changePercent: 0.48,
    },
    {
      id: 'bitcoin',
      name: 'hhhh',
      symbol: 'BTC',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      price: 20555,
      changePercent: -0.25,
    },
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      price: 20555,
      changePercent: 32.5,
    },
  ];

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
        <div>Chart</div>
        <div className='topfive-container'>
          {topCoins[0] !== undefined &&
            topCoins.map((topCoin, index) => {
              return (
                <CoinTop
                  price={`$${Math.floor(topCoin.price).toLocaleString('us')}`}
                  number={index + 1}
                  name={topCoin.name}
                  image={topCoin.image}
                  symbol={'BTS'}
                  changePercent={topCoin.priceChangePercentageWeekly}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default DashBoardDesk;
