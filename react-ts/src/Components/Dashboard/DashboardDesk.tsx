import React, { Fragment } from 'react';
import classes from './DashboardDesk.module.scss';
import DashBoardItem from './DashboardItem';
const DashBoardDesk: React.FC = (props) => {
  return (
    <div className={classes['dashboard-container']}>
      <h2>Dashboard</h2>
      <div className={classes['dashboard-desk']}>
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
        <DashBoardItem />
      </div>
    </div>
  );
};

export default DashBoardDesk;
