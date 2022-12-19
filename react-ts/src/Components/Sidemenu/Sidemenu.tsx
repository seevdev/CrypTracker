import { NavLink } from 'react-router-dom';
import {
  DashboardIcon,
  FavouriteIcon,
  SettingIcon,
  LogOutIcon,
} from '../../Utilities/Icons/Icons';
import NavBarGreeting from '../Navbar/NavBarGreeting/NavBarGreeing';

import classes from './Sidemenu.module.scss';

//TODO: find way to pass svg icon through props

const Sidemenu = (): JSX.Element => {
  return (
    <menu className={classes['side-menu']}>
      <NavBarGreeting />
      <ul>
        <div className={classes.links}>
          <li>
            <div>
              <div className={classes['side-menu--icon']}>{DashboardIcon}</div>
              <NavLink activeClassName={classes['active-link']} to='/dashboard'>
                Dashboard
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <div className={classes['side-menu--icon']}>{DashboardIcon}</div>
              <NavLink activeClassName={classes['active-link']} to='/market'>
                Market
              </NavLink>
            </div>
          </li>

          <li>
            <div>
              <div className={classes['side-menu--icon']}>{FavouriteIcon}</div>
              <NavLink to='/stalking' activeClassName={classes['active-link']}>
                Stalking
              </NavLink>
            </div>
          </li>

          <li>
            <div>
              <div className={classes['side-menu--icon']}>{SettingIcon}</div>
              <a href='#'>Settings</a>
            </div>
          </li>
        </div>

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
