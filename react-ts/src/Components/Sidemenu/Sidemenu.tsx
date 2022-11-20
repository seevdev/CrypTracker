import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DashboardIcon,
  LiveReportsIcon,
  FavouriteIcon,
  SettingIcon,
  LogOutIcon,
} from '../../Utilities/Icons/Icons';

import './Sidemenu.scss';

const Sidemenu = (): JSX.Element => {
  return (
    <menu className='menu'>
      <h1>CrypTracker</h1>
      <ul>
        <li>
          <div>
            <div className='side-menu_icon-back'>{DashboardIcon}</div>
            <NavLink activeClassName='active-link' to='/dashboard'>
              Dashboard
            </NavLink>
          </div>
        </li>

        <li>
          <div>
            <div className='side-menu_icon-back'>{FavouriteIcon}</div>
            <NavLink to='/fav' activeClassName='active-link'>
              May Favs
            </NavLink>
          </div>
        </li>

        {/* <li>
          <div>
            <div className='side-menu_icon-back'>{SettingIcon}</div>
            <a href='#'>Settings</a>
          </div>
        </li>
        <li>
          <div>
            <div className='side-menu_icon-back'>{LogOutIcon}</div>
            <a href='#'>Log out</a>
          </div>
        </li> */}
      </ul>
    </menu>
  );
};

export default Sidemenu;
