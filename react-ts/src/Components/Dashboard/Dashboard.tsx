import React from 'react';
import Header from '../Header/Header';
import Sidemenu from '../Sidemenu/Sidemenu';
import classes from './Dashboard.module.scss';
import DashBoardDesk from './DashboardDesk';

const Dashboard: React.FC = (props) => {
  return (
    <div className={classes.dashboard}>
      <Sidemenu />
      <Header />
      <DashBoardDesk />
    </div>
  );
};

export default Dashboard;
