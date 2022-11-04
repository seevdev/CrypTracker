import React, { useEffect, useState, useCallback, useContext } from 'react';

import generalCtx from '../../../store/general-context';
import fetchCtx from '../../../store/fetch-context';
import { IconArrowR, IconArrowL } from '../../../Utilities/Icons';
import { Coin } from '../../../Utilities/types-general';
import CoinsAll from '../Coins/CoinsAll';
import Pagination from '../../UI/Pagination';
import LineChart from '../../UI/ChartComponents/LineChart';
import CoinsTop from '../CoinsTop/CoinsTop';
import './DashboardDesk.scss';

function DashBoardDesk<T>(props: T) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinsPerPage, setCoinsPerPage] = useState<number>(9);
  const [display, setDisplay] = useState<boolean>(false);
  const [currentCoins, setCurrentCoins] = useState<Coin[]>([]);
  const [data, setData] = useState<any>([]);
  const [label, setLabel] = useState('');

  const { setCoinsHandler, isSearching, filteredCoins, isLoading, coins } =
    useContext(generalCtx);
  const { updateAllCoins, topCoins } = useContext(fetchCtx);

  useEffect(() => {
    updateAllCoins();
  }, []);

  useEffect(() => {
    if (topCoins.length > 0) {
      const randomTopCoin = topCoins[Math.floor(Math.random() * 5)];
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
  console.log(topCoins);
  const randomTopCoin = topCoins[0];
  console.log(randomTopCoin);

  const chartData = {
    labels: [
      '1 year',
      '200 days',
      '60 days',
      'Month',
      '14 days',
      'Week',
      'Today',
      'Last hour',
    ],
    datasets: [
      {
        label: `${label} Currency Dynamics`,
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <div className='items-container '>
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
        <div className='chart-container'>
          {topCoins.length !== 0 && (
            <LineChart
              type={'line'}
              data={chartData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          )}
        </div>

        <CoinsTop topCoins={topCoins} />
      </div>
    </div>
  );
}

export default DashBoardDesk;
