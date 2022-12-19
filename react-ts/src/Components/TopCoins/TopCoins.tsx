import { Coin } from '../../Models/coinModel';
import CoinTop from '../TopCoin/TopCoin';
import classes from './TopCoins.module.scss';

interface CoinsTop {
  topCoins: Coin[];
}

function CoinsTop(props: CoinsTop): JSX.Element {
  return (
    <div className={classes['top-coins']}>
      {/* <h3>Top Coins</h3> */}
      <div className={classes['topthree-container']}>
        <div className={classes['top-coins--titles']}>
          <span className={classes['titles--column-one']}>Name</span>
          <span>Price</span>
          <span>Weekly</span>
        </div>
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
