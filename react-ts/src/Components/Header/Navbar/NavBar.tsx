import React from 'react';
import classes from './NavBar.module.scss';
import NavBarGreeting from './NavBarGreeing';
import SearchBar from './NavSearch';

const NavBar: React.FC = (props) => {
  return (
    <nav className={classes['nav-bar']}>
      <NavBarGreeting />
      <SearchBar />
    </nav>
  );
};

export default NavBar;
