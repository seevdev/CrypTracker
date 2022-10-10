import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidemenu from '../Sidemenu/Sidemenu';
import DashBoardDesk from './DashboardDesk';
import SearchContext from '../../store/search-context';
import classes from './Dashboard.module.scss';
import IsSearchingProvider from '../../store/SearchingProvider';

function Dashboard<T>(props: T) {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  return (
    <IsSearchingProvider>
      <div className={classes.dashboard}>
        <Sidemenu />
        <Header />
        <DashBoardDesk />
      </div>
    </IsSearchingProvider>
  );
}

export default Dashboard;
