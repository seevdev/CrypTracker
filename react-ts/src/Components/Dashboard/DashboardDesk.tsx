import React from 'react';
import classes from './DashboardDesk.module.scss'
const DashBoardDesk: React.FC = (props) => {
  return (
    <div className={classes['dashboard-desk']}>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
      <div>Item</div>
    </div>
  );
};

export default DashBoardDesk;
