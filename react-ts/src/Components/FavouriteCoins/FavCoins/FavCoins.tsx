import React, { useContext } from 'react';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import FavCoin from '../FavCoin/FavCoin';
import generalCtx from '../../../store/general-context';
import BubbleChart from '../../UI/ChartComponents/BubbleChart';
import './FavCoins.scss';

Chart.register(CategoryScale);

function FavCoins(): JSX.Element {
  const { favCoins } = useContext(generalCtx);
  console.log(favCoins);
  return (
    <div className='FavCoins'>
      <div className='coins-container'>
        <div className='coins'>
          {favCoins.map((favCoin, index) => {
            console.log(favCoin.id);
            return (
              <FavCoin
                name={favCoin.name}
                image={favCoin.image}
                priceChangePercentageWeekly={
                  favCoin.priceChangePercentageWeekly
                }
                id={favCoin.id}
                key={favCoin.id}
                number={index}
              />
            );
          })}
        </div>
      </div>

      <BubbleChart
        data={{
          labels: ['BTC', 'RLD', 'MTG', 'GDS', 'GHT', 'KGF', 'VSE'],
          datasets: [
            {
              type: 'bar',
              label: '24h High',
              data: [10, 0, 30, 40, 50, 60, 70, 100, 2],
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
              minBarLength: 3,
              barPercentage: 0.5,
              barThickness: 50,
            },
          ],
        }}
        height={'300vh'}
        width={'500vw'}
      />
      <div className='graph'>Graph2</div>
    </div>
  );
}

export default FavCoins;
