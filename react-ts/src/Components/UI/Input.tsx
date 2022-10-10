import React from 'react';
import { InputProps } from 'react-html-props';
import classes from './Input.module.scss';

const Input = function (
  props: { searchHandler?: () => {}; label?: string } & InputProps
) {
  return (
    <div className={classes['input-container']}>
      <label>{props.label}</label>
      <input onChange={props.searchHandler} {...props} />
    </div>
  );
};

export default Input;
