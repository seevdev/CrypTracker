import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidemenu from '../Sidemenu/Sidemenu';
import DashBoardDesk from './DashboardDesk';
import SearchContext from '../../store/SearchContext';
import classes from './Dashboard.module.scss';

function Dashboard<T>(props: T) {

const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={isSearching}>
      <div className={classes.dashboard}>
        <Sidemenu />
        <Header />
        <DashBoardDesk />
      </div>
    </SearchContext.Provider>
  );
}

export default Dashboard;
