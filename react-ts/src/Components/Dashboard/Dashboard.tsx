import React from 'react';
import Sidemenu from '../Sidemenu/Sidemenu';
import classes from './Dashboard.module.scss';
import DashBoardDesk from './DashboardDesk';

const Dashboard: React.FC = (props) => {
  return (
    <div className={classes.dashboard}>
      <Sidemenu/>
      <div>Nav</div>
      <DashBoardDesk />
    </div>
  );
};

export default Dashboard;
