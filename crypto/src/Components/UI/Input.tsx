import React, { useContext } from 'react';
import SearchContext from '../../store/SearchContext';
import classes from './Input.module.scss';

const Input: React.FC = (props) => {
  const searchCtx = useContext(SearchContext);
  console.log(searchCtx)
  const onChangeHandler = () => {};
  return (
    <div className={classes['input-container']}>
      <label></label>
      <input onChange={onChangeHandler} {...props} />
    </div>
  );
};

export default Input;
