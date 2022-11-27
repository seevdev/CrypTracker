import React, { useContext, useEffect } from 'react';
import { IconTheme, RefreshIcon } from '../../Utilities/Icons';
import NavBarGreeting from './NavBarGreeing';
import NavSearch from './NavSearch';
import themeContext from '../../store/theme-context';
import generalCtx from '../../store/general-context';
import Button from '../UI/Button';
import './NavBar.scss';


const NavBar = (): JSX.Element => {
  const { theme, setTheme } = useContext(themeContext);
  const { updateCoins } = useContext(generalCtx);

  const onClickHandler = () => {
    const defaultTheme = 'dark';
    theme === defaultTheme ? setTheme('light') : setTheme('dark');
  };

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className='nav-bar'>
      <NavBarGreeting />
      <div className='search-container'>
        <NavSearch />
        <div className='icons'>
          <div className='nav_icon-back'>
            <button className='nav_btn' onClick={onClickHandler}>
              <div>{IconTheme}</div>
            </button>
          </div>
          <div className='nav_icon-back'>
            <Button onClick={updateCoins}>
              <div>{RefreshIcon}</div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
