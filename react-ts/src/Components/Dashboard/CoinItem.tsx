import React from 'react';
import { Coin } from '../../Utilities/types-general';
import './CoinItem.scss';

function CoinItem(props: Coin) {
  const price = `$${Math.trunc(props.price).toLocaleString('en-US')}`;
  return (
    <div key={props.id} className='item'>
      <div>
        <img src={props.image} />
        <span className='name'>{props.name}</span>
        <span className='price'>{price}</span>
        <span className='weekly-percent'>{`${props.priceChangePercentageWeekly}% this week`}</span>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='icon'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 4.5v15m7.5-7.5h-15'
        />
      </svg>
    </div>
  );
}

export default CoinItem;
