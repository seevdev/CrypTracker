import React, { useState, useContext, ChangeEvent, useEffect } from 'react';
import SearchContext from '../../../store/search-context';
import Input from '../../UI/Input';
import './NavSearch.scss';

const NavSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const { changeSearching, coins, filteredCoinsChangeHandler } =
    useContext(SearchContext);

  const searchHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValue((prev) => target.value);
  };

  useEffect(() => {
    if (inputValue.trim().length > 0) {
      changeSearching(true);
    } else {
      changeSearching(false);
    }
    const results = coins.filter((coin) =>
      coin.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
    );

    filteredCoinsChangeHandler([...results]);
  }, [inputValue]);

  return (
    <div className='nav-search'>
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
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>
      <Input value={inputValue} onChange={searchHandler} />
    </div>
  );
};

export default NavSearch;
