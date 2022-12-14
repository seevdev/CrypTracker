import React from 'react';
import { ArrowDown, ArrowUp } from '../../Utilities/Icons/Icons';
import classes from './TopCoin.module.scss';

interface TopCoinProps {
  number: number;
  image: string;
  name: string;
  changePercent: number;
  symbol: string;
  price: number | string;
}
const TopCoin = function (props: TopCoinProps): JSX.Element {
  const increasing = props.changePercent > 0 ? true : false;
  return (
    <div className={classes['top-coin']}>
      <div className='flex-row column-one'>
        <span>{props.number}</span>
        <span>
          <img src={props.image} />
        </span>

        <div className='flex-column name-box'>
          <span>{props.name}</span>
          <span className='symbol'>{props.symbol}</span>
        </div>
      </div>
      <span>{props.price}</span>
      <div className='flex-column'>
        <span className='coin-top--graph'>
          {increasing ? ArrowUp : ArrowDown}
        </span>
        <span className='percent'>{`${props.changePercent.toFixed(2)}%`}</span>
      </div>
    </div>
  );
};

export default TopCoin;
