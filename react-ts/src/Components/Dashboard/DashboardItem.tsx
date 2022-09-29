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
      <span>Icon</span>
    </div>
  );
};

export default DashBoardItem;
