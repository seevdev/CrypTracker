import React from 'react';
import classes from './Icons.module.scss';

export const IconArrowR = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`${classes.icon} ${classes['icon-arrow']}`}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
    />
  </svg>
);

export const IconArrowL = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className={`${classes.icon} ${classes['icon-arrow']}`}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
    />
  </svg>
);