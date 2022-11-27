import React from 'react';
import Header from '../../Components/Header/Header';
import Sidemenu from '../../Components/Sidemenu/Sidemenu';
import DashBoardDesk from '../../Components/Dashboard/DashBoardDesk/DashboardDesk';

import './Dashboard.scss';

const Dashboard = (): JSX.Element => {
  return (
    <div className='dashboard'>
      <Sidemenu />
      <Header withSearchBar={true} withRefreshBtn={true} />
      <DashBoardDesk />
    </div>
  );
};

export default Dashboard;
