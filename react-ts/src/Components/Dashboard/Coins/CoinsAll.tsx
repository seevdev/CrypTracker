import React from 'react';
import CoinItem from '../CoinItem';
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
            priceChange7dPercent={coin.priceChange7dPercent}
            image={coin.image}
            price14Days={coin.price14Days}
            price30Days={coin.price30Days}
            price60Days={coin.price60Days}
            high24h={coin.high24h}
            total={coin.total}
            time={coin.time}
            priceChange1h={coin.priceChange1h}
            priceChange1y={coin.priceChange1y}
            priceChange7d={coin.priceChange7d}
            symbol={coin.symbol}
            priceChange200d={coin.priceChange200d}
          />
        );
      })}
    </div>
  );
};
export default CoinsAll;
