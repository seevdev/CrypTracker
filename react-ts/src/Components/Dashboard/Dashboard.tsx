import React, { useEffect, useState, useCallback } from 'react';
import Header from '../Header/Header';
import Sidemenu from '../Sidemenu/Sidemenu';
import classes from './Dashboard.module.scss';
import DashBoardDesk from './DashboardDesk';



function Dashboard<T>(props: T) {
  
  
  return (
    <div className={classes.dashboard}>
      <Sidemenu />
      <Header />
      <DashBoardDesk />
    </div>
  );
}

export default Dashboard;
