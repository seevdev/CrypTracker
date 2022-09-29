import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro';
import classes from './Sidemenu.module.scss';

const Sidemenu: React.FC = (props) => {
  return (
    <menu className={classes.menu}>
      <h1>CrypTracker</h1>
      <ul>
        <li>
          <div>
            <FontAwesomeIcon icon={solid('user-secret')} />
            <a href='#'>Dashboard</a>
          </div>
        </li>
        <li>
          <div>
            <span>Icon</span> <a href='#'>Live Reports</a>{' '}
          </div>
        </li>
        <li>
          <div>
            <span>Icon</span> <a href='#'>My Favs</a>{' '}
          </div>
        </li>
        <li>
          <div>
            <span>Icon</span> <a href='#'>Settings</a>{' '}
          </div>
        </li>
        <li>
          <div>
            <span>Icon</span> <a href='#'>Log out</a>{' '}
          </div>
        </li>
      </ul>
    </menu>
  );
};

export default Sidemenu;
