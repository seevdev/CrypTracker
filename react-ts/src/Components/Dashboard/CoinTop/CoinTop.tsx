import React from 'react';
import { ArrowDown, ArrowUp } from '../../../Utilities/Icons';
import './CoinTop.scss';

interface CoinTopProps {
  number: number;
  image: string;
  name: string;
  changePercent: number;
  symbol: string;
  price: number | string;
}
function CoinTop(props: CoinTopProps): JSX.Element {
  const increasing = props.changePercent > 0 ? true : false;
  return (
    <div className='CoinTop'>
      <div className='flex-row column-one'>
        <span>{props.number}</span>
        <span>
          <img src={props.image} />
        </span>

        <div className='flex-column'>
          <span>{props.name}</span>
          <span>{props.symbol}</span>
        </div>
      </div>
      <span>{props.price}</span>
      <div className='flex-column'>
        <span className='coin-top--graph'>
          {increasing ? ArrowUp : ArrowDown}
        </span>
        <span>{`${props.changePercent.toFixed(2)}%`}</span>
      </div>
    </div>
  );
}

export default CoinTop;
