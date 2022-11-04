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
                priceChangePercentageWeekly={favCoin.priceChange7dPercent}
                id={favCoin.id}
                key={favCoin.id}
                number={index}
                symbol={favCoin.symbol}
              />
            );
          })}
        </div>
      </div>

      <div>Graph1</div>
      <div className='graph'>Graph2</div>
    </div>
  );
}

export default FavCoins;
