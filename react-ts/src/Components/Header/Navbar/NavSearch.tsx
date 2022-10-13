import React, { useState, useContext, ChangeEvent, useEffect } from 'react';
import SearchContext from '../../../store/search-context';
import { Coin } from '../../../Utilities/types-general';
import Input from '../../UI/Input';
import classes from './NavSearch.module.scss';

const NavSearch = (props: any) => {
  const [inputValue, setInputValue] = useState('');
  const { isSearching, changeSearching, coins, filteredCoinsChangeHandler } =
    useContext(SearchContext);

  const searchHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };

  useEffect(() => {
    if (inputValue.trim().length > 0) {
      changeSearching(true);
    } else {
      changeSearching(false);
    }
    const results = coins.filter((coin) => coin.name === 'Bitcoin');

    filteredCoinsChangeHandler(results);
  }, [inputValue]);

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
      <Input value={inputValue} onChange={searchHandler} />
    </div>
  );
};

export default NavSearch;
