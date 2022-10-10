import React from 'react';
import CoinItem from './CoinItem';
import classes from './CoinsAll.module.scss';

const CoinsAll = function ({ currentCoins }: any) {
  return (
    <div className={classes['coins-container']}>
      {currentCoins.map((coin: any) => {
        return (
          <CoinItem
            id={coin.id}
            name={coin.name}
            price={coin.price}
            priceChangePercentageWeekly={coin.priceChangePercentageWeekly}
            image={coin.image}
          />
        );
      })}
    </div>
  );
};
export default CoinsAll;
