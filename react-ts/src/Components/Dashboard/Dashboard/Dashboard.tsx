import React from 'react';
import Header from '../../Header/Header';
import Sidemenu from '../../Sidemenu/Sidemenu';
import DashBoardDesk from '../DashBoardDesk/DashboardDesk';
import './Dashboard.scss';


function Dashboard<T>(props: T) {
  return (
   
          <div className='dashboard'>
            <Sidemenu />
            <Header />
            <DashBoardDesk />
          </div>
     
  );
}

export default Dashboard;
