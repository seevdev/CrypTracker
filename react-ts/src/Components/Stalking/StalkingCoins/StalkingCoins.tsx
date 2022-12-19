import { useContext } from 'react';

import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import StalkingCoin from '../StalkingCoin/StalkingCoin';
import generalCtx from '../../../store/general-context';

import classes from './StalkingCoins.module.scss';

Chart.register(CategoryScale);

const StalkingCoins = function (): JSX.Element {
  const { favCoins } = useContext(generalCtx);

  return (
    <div className={classes['stalking-coins']}>
      <h2>Favourite Coins</h2>
      <div className={classes['coins-container']}>
        <div className={classes.coins}>
          {favCoins.map((favCoin, index) => {
            console.log(favCoin.id);
            return (
              <StalkingCoin
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
    </div>
  );
};

export default StalkingCoins;
