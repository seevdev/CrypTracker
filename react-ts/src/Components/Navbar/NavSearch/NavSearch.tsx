import { useState, useContext, useEffect, SyntheticEvent } from 'react';
import generalCtx from '../../../store/general-context';
import Input from '../../UI/Input/Input';
import classes from './NavSearch.module.scss';

const NavSearch = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const { setIsSearching, coins, setFilteredCoins } = useContext(generalCtx);

  const searchHandler = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setInputValue((prev) => target.value);
  };

  useEffect(() => {
    if (inputValue.trim().length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }

    const results = [
      ...coins.filter((coin) =>
        coin.name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    ];

    setFilteredCoins([...results]);
  }, [inputValue, coins]);

  return (
    <div className={classes['nav-search']}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={classes['search-icon']}
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
