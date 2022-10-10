import React, { useState, useContext, ChangeEvent } from 'react';
import SearchContext from '../../../store/search-context';
import Input from '../../UI/Input';
import classes from './NavSearch.module.scss';

const NavSearch = (props: any) => {
  const [isSearching, setIsSearching] = useState(false);
  const searchingCtx = useContext(SearchContext);

  const searchHandler = (e: ChangeEvent) => {
    // 1.Changes state to isSearching = true
    // 2.Filteres array of coins and changes context arr
    const target = e.target as HTMLInputElement;
    target.value === '' ? setIsSearching(false) : setIsSearching(true);
    searchingCtx.isSearching = isSearching;
  };

  return (
    <div className={classes['nav-search']}>
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
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>

      <Input onChange={searchHandler} />
    </div>
  );
};

export default NavSearch;
