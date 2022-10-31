import React from 'react';
import CoinItem from './CoinItem';
import classes from './CoinsAll.module.scss';

const CoinsAll = function ({ currentCoins }: any) {
  return (
    <div className={classes['coins-container']}>
      {currentCoins.map((coin: any) => {
        return (
          <CoinItem
            key={coin.id}
            id={coin.id}
            name={coin.name}
            price={coin.price}
            priceChangePercentageWeekly={coin.priceChangePercentageWeekly}
            image={coin.image}
            price14Days={coin.price14Days}
            price30Days={coin.price30Days}
            price60Days={coin.price60Days}
            total={coin.total}
            time={coin.time}
          />
        );
      })}
    </div>
  );
};
export default CoinsAll;
