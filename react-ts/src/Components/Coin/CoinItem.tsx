import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  TriangleUpIcon,
  TriangleDownIcon,
} from '../../Utilities/Icons/Icons';
import { Coin } from '../../Models/coinModel';
import Button from '../UI/Button/Button';

import classes from './CoinItem.module.scss';
import generalCtx from '../../store/general-context';

function CoinItem(props: Coin) {
  const price = `$${props.price.toLocaleString('en-US')}`;
  const { setCurrentCoin } = useContext(generalCtx);
  // const navigate = useNavigate();

  const coinStatsHandler = (props: Coin) => {
    setCurrentCoin(props);
    // navigate('/coinStats');
  };

  let weeklyPercentIcon = TriangleUpIcon;
  if (props.priceChange7dPercent < 0) {
    weeklyPercentIcon = TriangleDownIcon;
  }

  return (
    <div key={props.id} className={classes.coin}>
      <div className={classes['coin-info']}>
        <img src={props.image} />
        <span className={classes.name}>{props.name}</span>
        <span className={classes.price}>{price}</span>
        <div className={`${classes['flex-row']} ${classes.gap}`}>
          <span>{weeklyPercentIcon}</span>
          <span
            className={classes['week-change']}
          >{`${props.priceChange7dPercent.toFixed(2)}% this week`}</span>
        </div>
      </div>

      <Button>
        <span
          onClick={() => {
            coinStatsHandler(props);
          }}
        >
          {'+'}
        </span>
      </Button>
    </div>
  );
}

export default CoinItem;
