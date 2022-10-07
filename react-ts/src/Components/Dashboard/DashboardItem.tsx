import React from 'react';
import classes from './DashboardItem.module.scss';
type ItemProps = {
  img: string;
  price: number;
  priceChangePercentageWeekly: number;
  name: string;
  id: number | string;

  children?: React.ReactNode;
};
function DashBoardItem(props: ItemProps) {
  const price = `$${Math.trunc(props.price)}`;
  return (
    <div className={classes.item}>
      <div>
        <img src={props.img} />
        <span className={classes.name}>{props.name}</span>
        <span className={classes.price}>{price}</span>
        <span className={classes['weekly-percent']}>{`${props.priceChangePercentageWeekly}% this week`}</span>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={classes.icon}
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

export default DashBoardItem;
