import React from 'react';
import classes from './Input.module.scss';

const Input: React.FC = (props) => {
  return (
    <div className={classes['input-container']}>
      <label></label>
      <input {...props} />
    </div>
  );
};

export default Input;
