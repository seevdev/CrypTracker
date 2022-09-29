import React from 'react';
import Input from '../../UI/Input';
import classes from './NavSearch.module.scss';

const NavSearch: React.FC = (props) => {
  return (
    <div className={classes['nav-search']}>
      <span>Icon</span>
      <Input />
    </div>
  );
};

export default NavSearch;
