import React from 'react';
import Header from '../../Components/Header/Header';
import Sidemenu from '../../Components/Sidemenu/Sidemenu';
import DashBoardDesk from '../../Components/Dashboard/DashBoardDesk/DashboardDesk';
import GeneralCtxProvider from '../../store/GeneralCtxProvider';
import ThemeContextProvider from '../../store/ThemeContextProvider';
import FetchCtxtProvider from '../../store/FetchCtxPtovider';
import './Dashboard.scss';

const Dashboard = (): JSX.Element => {
  return (
    <GeneralCtxProvider>
      <FetchCtxtProvider>
        <ThemeContextProvider>
          <div className='dashboard'>
            <Sidemenu />
            <Header withSearchBar={true} withRefreshBtn={true} />
            <DashBoardDesk />
          </div>
        </ThemeContextProvider>
      </FetchCtxtProvider>
    </GeneralCtxProvider>
  );
};

export default Dashboard;
