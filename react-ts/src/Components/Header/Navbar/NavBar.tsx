import React from 'react';
import classes from './NavBar.module.scss';
import NavBarGreeting from './NavBarGreeing';
import SearchBar from './NavSearch';

const NavBar: React.FC = (props) => {
  return (
    <nav className={classes['nav-bar']}>
      <NavBarGreeting />
      <div className={classes['search-container']}>
        <SearchBar />
        <div className={classes.icons}>
          
          <span>Icon</span>
          <span>Icon</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
