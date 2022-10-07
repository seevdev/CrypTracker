import React,{useState} from 'react';
import Input from '../../UI/Input';
import classes from './NavSearch.module.scss';

const NavSearch = (props: any) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
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

      <Input />
    </div>
  );
};

export default NavSearch;
