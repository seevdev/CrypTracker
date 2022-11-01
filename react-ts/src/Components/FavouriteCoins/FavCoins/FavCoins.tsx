import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import FavCoin from '../FavCoin/FavCoin';
import generalCtx from '../../../store/general-context';
import './FavCoins.scss';

interface LineProps {
  options: ChartOptions<'line'>;
  data: ChartData<'line'>;
}

function FavCoins(): JSX.Element {
  const { favCoins } = useContext(generalCtx);
  console.log(favCoins);
  return (
    <div className='FavCoins'>
      <div className='coins-container'>
        <div className='coins'>
          {favCoins.map((favCoin,index) => {
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
                number = {index}
              />
            );
          })}
        </div>
      </div>

      <div className='graph'>Graph1</div>
      <div className='graph'>Graph2</div>
    </div>
  );
}

export default FavCoins;
