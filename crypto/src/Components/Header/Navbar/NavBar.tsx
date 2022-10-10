import React from 'react';
import classes from './NavBar.module.scss';
import NavBarGreeting from './NavBarGreeing';
import NavSearch from './NavSearch';

const NavBar = (props:any) => {
  return (
    <nav className={classes['nav-bar']}>
      <NavBarGreeting />
      <div className={classes['search-container']}>
        <NavSearch />
        <div className={classes.icons}>
          <div className={classes['icon-back']}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={classes.icon}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
              />
            </svg>
          </div>
          <div className={classes['icon-back']}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={classes.icon}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
