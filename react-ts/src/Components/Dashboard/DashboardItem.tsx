import React from 'react';
import classes from './DashboardItem.module.scss';

const DashBoardItem: React.FC = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <img src={'https://i.stack.imgur.com/ILTQq.png'} />
        <span>$300</span>
        <span>45% this week</span>
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
};

export default DashBoardItem;
