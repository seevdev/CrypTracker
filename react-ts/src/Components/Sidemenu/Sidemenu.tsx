import { NavLink } from 'react-router-dom';
import {
  DashboardIcon,
  FavouriteIcon,
  SettingIcon,
  LogOutIcon,
} from '../../Utilities/Icons/Icons';

import classes from './Sidemenu.module.scss';

const Sidemenu = (): JSX.Element => {
  return (
    <menu className={classes['side-menu']}>
      <h1>CrypTracker</h1>
      <ul>
        <li>
          <div>
            <div className={classes['side-menu--icon']}>{DashboardIcon}</div>
            <NavLink activeClassName='active-link' to='/dashboard'>
              Dashboard
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <div className={classes['side-menu--icon']}>{DashboardIcon}</div>
            <NavLink activeClassName='active-link' to='/market'>
              Market
            </NavLink>
          </div>
        </li>

        <li>
          <div>
            <div className={classes['side-menu--icon']}>{FavouriteIcon}</div>
            <NavLink to='/stalking' activeClassName='active-link'>
              Stalking
            </NavLink>
          </div>
        </li>

        <li>
          <div>
            <div className={classes['side-menu--icon']}>{SettingIcon}</div>
            <a href='#'>g</a>
          </div>
        </li>
        <li>
          <div>
            <div className={classes['side-menu--icon']}>{LogOutIcon}</div>
            <a href='#'>Log out</a>
          </div>
        </li>
      </ul>
    </menu>
  );
};

export default Sidemenu;
