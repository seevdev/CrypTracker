import React from 'react';
import Header from '../Header/Header';
import Sidemenu from '../Sidemenu/Sidemenu';
import DashBoardDesk from './DashBoardDesk/DashboardDesk';
import './Dashboard.scss';
import GeneralCtxProvider from '../../store/GeneralCtxProvider';
import ThemeContextProvider from '../../store/ThemeContextProvider';
import FetchCtxtProvider from '../../store/FetchCtxPtovider';

function Dashboard<T>(props: T) {
  return (
    <GeneralCtxProvider>
      <FetchCtxtProvider>
        <ThemeContextProvider>
          <div className='dashboard'>
            <Sidemenu />
            <Header />
            <DashBoardDesk />
          </div>
        </ThemeContextProvider>
      </FetchCtxtProvider>
    </GeneralCtxProvider>
  );
}

export default Dashboard;
