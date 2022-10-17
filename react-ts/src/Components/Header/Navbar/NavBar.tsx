import React, { useContext } from 'react';
import './NavBar.scss';
import { IconTheme } from '../../../Utilities/Icons';
import NavBarGreeting from './NavBarGreeing';
import NavSearch from './NavSearch';
import themeContext from '../../../store/theme-context';


const NavBar = (props: any) => {
  const { setTheme, theme } = useContext(themeContext);
  const onClickHandler = () => {
    const defaultTheme = 'dark';
    theme === defaultTheme ? setTheme('light') : setTheme('dark');
  };
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='icon'
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
