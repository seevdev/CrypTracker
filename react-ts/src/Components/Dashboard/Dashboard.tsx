import React, { useContext } from 'react';
import Header from '../Header/Header';
import Sidemenu from '../Sidemenu/Sidemenu';
import DashBoardDesk from './DashboardDesk';
import './Dashboard.scss';
import IsSearchingProvider from '../../store/SearchingProvider';
import ThemeContextProvider from '../../store/ThemeContextProvider';
import themeContext from '../../store/theme-context';

function Dashboard<T>(props: T) {
  const { theme } = useContext(themeContext);
  return (
    <IsSearchingProvider>
      <ThemeContextProvider>
        <div className='dashboard'>
          <Sidemenu />
          <Header />
          <DashBoardDesk />
        </div>
      </ThemeContextProvider>
    </IsSearchingProvider>
  );
}

export default Dashboard;
