import React, { useContext, useEffect } from 'react';
import './NavBar.scss';
import { IconTheme, RefreshIcon } from '../../../Utilities/Icons/Icons';
import NavBarGreeting from '../NavBarGreeting/NavBarGreeing';
import NavSearch from '../NavSearch/NavSearch';
import themeContext from '../../../store/theme-context';
import Button from '../../UI/Button/Button';
import fetchCtx from '../../../store/fetch-context';
interface NavBArProps {
  withSearchBar: boolean;
  withRefreshBtn: boolean;
}

const NavBar = (props: NavBArProps): JSX.Element => {
  const { theme, setTheme } = useContext(themeContext);
  const { updateAllCoins } = useContext(fetchCtx);
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
        {props.withSearchBar && <NavSearch />}
        <div className='icons'>
          <div className='nav_icon-back'>
            <button className='nav_btn' onClick={onClickHandler}>
              <div>{IconTheme}</div>
            </button>
          </div>
          {props.withRefreshBtn && (
            <div className='nav_icon-back'>
              <Button
                onClick={() => {
                  updateAllCoins();
                }}
              >
                <div>{RefreshIcon}</div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
