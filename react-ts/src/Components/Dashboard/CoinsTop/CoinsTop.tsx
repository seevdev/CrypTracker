import React from 'react';
import { Coin } from '../../../Utilities/types-general';
import CoinTop from '../CoinTop/CoinTop';
import './CoinsTop.scss';

interface CoinsTop {
  topCoins: Coin[];
}

function CoinsTop(props: CoinsTop): JSX.Element {
  return (
    <div className='CoinsTop'>
      <h3>Top 5 Coins</h3>
      <div className='topfive-container'>
        {props.topCoins.map((topCoin, index) => {
          return (
            <CoinTop
              key={topCoin.id}
              price={`$${Math.floor(topCoin.price).toLocaleString('us')}`}
              number={index + 1}
              name={topCoin.name}
              image={topCoin.image}
              symbol={topCoin.symbol.toUpperCase()}
              changePercent={topCoin.priceChange7dPercent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CoinsTop;
